// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPAwzoTSl9iXdtEHWSgW2MGywrIZOZ0Fs",
  authDomain: "bubble-chat-6252e.firebaseapp.com",
  projectId: "bubble-chat-6252e",
  storageBucket: "bubble-chat-6252e.appspot.com",
  messagingSenderId: "688962326537",
  appId: "1:688962326537:web:c656212b8e0919b42928d8",
  measurementId: "G-H6RQBQV9Q1"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { auth, db,storage };