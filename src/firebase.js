import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1jNLvZ46LezXW6uJ2R1YHRv9kt-vC3cc",
  authDomain: "personal-finance-tracker-330dd.firebaseapp.com",
  projectId: "personal-finance-tracker-330dd",
  storageBucket: "personal-finance-tracker-330dd.appspot.com",
  messagingSenderId: "730504375459",
  appId: "1:730504375459:web:491077c60912aa4a966316",
  measurementId: "G-95YS424HHJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
