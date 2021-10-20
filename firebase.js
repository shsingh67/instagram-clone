// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx3xzlxBYKuSdLD3L9EEO6krW5fO244pE",
  authDomain: "ezrecycle-309106.firebaseapp.com",
  projectId: "ezrecycle-309106",
  storageBucket: "ezrecycle-309106.appspot.com",
  messagingSenderId: "727368283555",
  appId: "1:727368283555:web:1ab944b34a0414b4f75616",
  measurementId: "G-82TK0KFER1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
