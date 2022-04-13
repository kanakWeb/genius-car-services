// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACwaUYYkoX0mNx342B5uG3qED15cSaP3Y",
  authDomain: "genius-car-services-26bce.firebaseapp.com",
  projectId: "genius-car-services-26bce",
  storageBucket: "genius-car-services-26bce.appspot.com",
  messagingSenderId: "666600994510",
  appId: "1:666600994510:web:39adf02d9ea9244d16c29f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
