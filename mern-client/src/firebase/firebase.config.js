// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABLpiEcafbNN2q4w3c5wD2qSHqHch-dfY",
  authDomain: "mern-book-inventory-5dda3.firebaseapp.com",
  projectId: "mern-book-inventory-5dda3",
  storageBucket: "mern-book-inventory-5dda3.appspot.com",
  messagingSenderId: "555802369978",
  appId: "1:555802369978:web:03630b3fbd9113030e0783",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
