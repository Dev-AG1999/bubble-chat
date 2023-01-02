// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
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

async function sendMessage(roomId, user, text) {
  try {
      await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
          uid: user.uid,
          displayName: user.displayName,
          text: text.trim(),
          timestamp: serverTimestamp(),
      });
  } catch (error) {
      console.error(error);
  }
}
function getMessages(roomId, callback) {
  return onSnapshot(
      query(
          collection(db, 'chat-rooms', roomId, 'messages'),
          orderBy('timestamp', 'asc')
      ),
      (querySnapshot) => {
          const messages = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
          }));
          callback(messages);
      }
  );
}


// ...



// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { auth, db,storage , sendMessage ,getMessages};




