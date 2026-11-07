import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const apiKey =
  (typeof import.meta !== 'undefined' && import.meta.env && (import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.REACT_APP_FIREBASE_API_KEY)) ||
  (typeof process !== 'undefined' && process.env && (process.env.VITE_FIREBASE_API_KEY || process.env.REACT_APP_FIREBASE_API_KEY)) ||
  '';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey,
  authDomain: "bramble-6d031.firebaseapp.com",
  projectId: "bramble-6d031",
  storageBucket: "bramble-6d031.appspot.com",
  messagingSenderId: "57326740831",
  appId: "1:57326740831:web:22aafc581bb17bfb89c2ea",
  measurementId: "G-60H9NZR5GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics = null;
if (typeof window !== "undefined" && apiKey) {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}

export { analytics };
export const auth = getAuth(app);
