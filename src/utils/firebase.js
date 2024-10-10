// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQvLPNXu4OrAuITlPfQrPUl2gUSNe5v5g",
  authDomain: "bramble-6d031.firebaseapp.com",
  projectId: "bramble-6d031",
  storageBucket: "bramble-6d031.appspot.com",
  messagingSenderId: "57326740831",
  appId: "1:57326740831:web:22aafc581bb17bfb89c2ea",
  measurementId: "G-60H9NZR5GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();