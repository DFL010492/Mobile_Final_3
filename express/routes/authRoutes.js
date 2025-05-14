import express from 'express';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig.js';

const router = express.Router();

// Rota de registro
router.post('/register', async (req, res) => {
  const { email, password, nome } = req.body;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await addDoc(collection(db, 'usuarios'), {
      uid: user.uid,
      email,
      nome
    });

    res.status(201).json({ uid: user.uid, email });
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

export default router;
