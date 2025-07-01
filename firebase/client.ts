// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-0snKDHmNUgHlvK9Wdu91flPT1gzKr5s",
  authDomain: "selpprep.firebaseapp.com",
  projectId: "selpprep",
  storageBucket: "selpprep.firebasestorage.app",
  messagingSenderId: "823545322861",
  appId: "1:823545322861:web:c4f1f19dbb6187e42b4e64",
  measurementId: "G-F867X1B4S4"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
