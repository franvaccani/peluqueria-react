// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6vGR6La39pQOr5ra7wxph88ViXTnlFh8",
  authDomain: "peluqueria-react.firebaseapp.com",
  projectId: "peluqueria-react",
  storageBucket: "peluqueria-react.firebasestorage.app",
  messagingSenderId: "13299837711",
  appId: "1:13299837711:web:c938422ea16890b9226c7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);