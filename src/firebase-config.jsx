// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);
export const db = getFirestore(app)