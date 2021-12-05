// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDB7hzpV9qQ66ItWI5EIU04A8ctby9XvA",
  authDomain: "energy-fac05.firebaseapp.com",
  projectId: "energy-fac05",
  storageBucket: "energy-fac05.appspot.com",
  messagingSenderId: "125789199615",
  appId: "1:125789199615:web:5b7b90368d478082b300ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }