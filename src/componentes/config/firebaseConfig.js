// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN5sbJHn9Yz8qsKOAkued5UBF6Rb0EDz4",
  authDomain: "agencia-de-viaje-92cf9.firebaseapp.com",
  projectId: "agencia-de-viaje-92cf9",
  storageBucket: "agencia-de-viaje-92cf9.appspot.com",
  messagingSenderId: "941018652991",
  appId: "1:941018652991:web:02c869389ec7646f31f38a"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;