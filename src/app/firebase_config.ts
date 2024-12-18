// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOMXdKA7IkwgotF4oeN6Kg_SeSdS84O_o",
  authDomain: "porto-japran.firebaseapp.com",
  projectId: "porto-japran",
  storageBucket: "porto-japran.firebasestorage.app",
  messagingSenderId: "831595761905",
  appId: "1:831595761905:web:81f739fafe832347bd1950",
  measurementId: "G-R038ZLSMCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };