// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARBX0wwQsy-bkTN2iS5XXPzoT3aXNuEAk",
  authDomain: "mobile-final3.firebaseapp.com",
  projectId: "mobile-final3",
  storageBucket: "mobile-final3.firebasestorage.app",
  messagingSenderId: "35957442181",
  appId: "1:35957442181:web:0d16961ae53182afe9cbec",
  measurementId: "G-T9BV9HQDM3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
