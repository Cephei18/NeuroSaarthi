// ✅ Firebase Configuration File (src/firebase.js)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCkAQKfBvzEBit4nhIFrlDbvHPq0QWhHHs",
    authDomain: "neurosaarthi.firebaseapp.com",
    projectId: "neurosaarthi",
    storageBucket: "neurosaarthi.firebasestorage.app",
    messagingSenderId: "463927471101",
    appId: "1:463927471101:web:a5f8b0c2bb4f4f8b45c794"
  };  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
