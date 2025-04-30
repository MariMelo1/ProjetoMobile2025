// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Iee07OWf8Pefj2kVx8zcJTD9hNCT01s",
  authDomain: "mobile2025-83707.firebaseapp.com",
  projectId: "mobile2025-83707",
  storageBucket: "mobile2025-83707.firebasestorage.app",
  messagingSenderId: "99147319060",
  appId: "1:99147319060:web:7f2260efd0e6c1be3e2401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

