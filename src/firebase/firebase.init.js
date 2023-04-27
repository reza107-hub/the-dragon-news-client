// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdJongyTrz7vgXTZ8p7X9UAhfm87lciuI",
    authDomain: "dragon-news-auth-2dee2.firebaseapp.com",
    projectId: "dragon-news-auth-2dee2",
    storageBucket: "dragon-news-auth-2dee2.appspot.com",
    messagingSenderId: "255076818181",
    appId: "1:255076818181:web:03e82490343193fe386b6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app