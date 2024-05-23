// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import getStorage from Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-SB4rVNTOfQpvKlJWbECSynDff_ELNYc",
  authDomain: "zakirs-ecommerce.firebaseapp.com",
  projectId: "zakirs-ecommerce",
  storageBucket: "zakirs-ecommerce.appspot.com",
  messagingSenderId: "153093504421",
  appId: "1:153093504421:web:05d5227e4c007f7d2a3c4c",
  measurementId: "G-KFRNG9LHMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app); // Initialize and export storage
