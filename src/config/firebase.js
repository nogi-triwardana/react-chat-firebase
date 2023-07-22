// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrjmw-_93Rh298eVXNPNvslkANpA5C0KA",
  authDomain: "react-chat-nogi.firebaseapp.com",
  projectId: "react-chat-nogi",
  storageBucket: "react-chat-nogi.appspot.com",
  messagingSenderId: "969878493262",
  appId: "1:969878493262:web:da37988e4386b6b1608b1f",
  measurementId: "G-ZWFKHN175L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);