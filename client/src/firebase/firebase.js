// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBakgwkG9fW3x_SK_zr83vjLG2il727NhE",
  authDomain: "dehireventures.firebaseapp.com",
  projectId: "dehireventures",
  storageBucket: "dehireventures.appspot.com",
  messagingSenderId: "557220832390",
  appId: "1:557220832390:web:d0a91eda48f0cb04c39d07",
  measurementId: "G-JTHBFCE9QY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app