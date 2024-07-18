// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTlGeV92ITkN46lsY1TaSPD_tXWzQtjv8",
  authDomain: "quantumbot-c138a.firebaseapp.com",
  projectId: "quantumbot-c138a",
  storageBucket: "quantumbot-c138a.appspot.com",
  messagingSenderId: "157834974256",
  appId: "1:157834974256:web:cac8dafe776f68bde449f5"
};

// Initialize Firebase
const Firebase_Object = initializeApp(firebaseConfig);

export default Firebase_Object;