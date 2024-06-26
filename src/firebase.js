// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAYBmARg8CmevoEE3V4Ikermqo_wNNkUc",
  authDomain: "e-commerce-website-c6f81.firebaseapp.com",
  projectId: "e-commerce-website-c6f81",
  storageBucket: "e-commerce-website-c6f81.appspot.com",
  messagingSenderId: "327041359920",
  appId: "1:327041359920:web:300488b3d0aebf4ddb0df5",
  measurementId: "G-VMHEP6S52L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };