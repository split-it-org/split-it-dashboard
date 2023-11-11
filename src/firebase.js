import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0UyxWrEaahb6a7ogtW3PFR56suKSMh8s",
  authDomain: "split-it-7455c.firebaseapp.com",
  projectId: "split-it-7455c",
  storageBucket: "split-it-7455c.appspot.com",
  messagingSenderId: "3646274172",
  appId: "1:3646274172:web:5e47ffcb97fcd58ee4e7f9",
  measurementId: "G-V2SNHPZV76",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
