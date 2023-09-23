import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAfvEn03g9ib1S2yRCdo99zg7bbdJ5Q1eM",
  authDomain: "project1-ff787.firebaseapp.com",
  projectId: "project1-ff787",
  storageBucket: "project1-ff787.appspot.com",
  messagingSenderId: "873516172286",
  appId: "1:873516172286:web:81cb729e1f66f945cb76af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const datbase = getAuth(app)