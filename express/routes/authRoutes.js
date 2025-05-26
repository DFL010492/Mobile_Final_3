import express from 'express';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig.js';


const router = express.Router();

// Rota de registro
router.post('/register', async (req, res) => {
  const { email, password, nome, heroi, nascimento } = req.body;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log('Criando usuário com uid:', user.uid, 'e email:', email);
    if (!user.uid || !email) {
      throw new Error('Dados inválidos: UID ou email ausentes');
    }
    await addDoc(collection(db, 'usuarios'), {
      uid: user.uid,
      email,
      nome,
      heroi,
      nascimento,
    });

    res.status(201).json({ uid: user.uid, email, nome, heroi, nascimento });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota de login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    res.status(200).json({ uid: user.uid, email: user.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  
});

router.get('/perfil/:uid', async (req, res) => {
  const { uid } = req.params;
  try {
    const q = query(collection(db, 'usuarios'), where('uid', '==', uid));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const userData = snapshot.docs[0].data();
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
