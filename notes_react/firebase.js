// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {collection, getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAegnoFU5H_MFEcy4rsTQ5fN1rGDkdiAr8",
  authDomain: "react-notes-341f3.firebaseapp.com",
  projectId: "react-notes-341f3",
  storageBucket: "react-notes-341f3.appspot.com",
  messagingSenderId: "917337158400",
  appId: "1:917337158400:web:c0c98d3d7ab0940e67b9e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')