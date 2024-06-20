// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-e3580.firebaseapp.com",
    projectId: "mern-estate-e3580",
    storageBucket: "mern-estate-e3580.appspot.com",
    messagingSenderId: "799662530639",
    appId: "1:799662530639:web:cb5b56ea9bcc91ba158a3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);