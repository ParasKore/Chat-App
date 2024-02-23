// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBCVbFZMsLio9KiE7H4uQGmQZrzK4c0TkQ",
  authDomain: "chat-app-c1b23.firebaseapp.com",
  projectId: "chat-app-c1b23",
  storageBucket: "chat-app-c1b23.appspot.com",
  messagingSenderId: "176301264283",
  appId: "1:176301264283:web:ec0650b9faf4d32792253e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();
export const db=getFirestore(app);
