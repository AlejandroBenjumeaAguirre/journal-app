import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDU1yNrdSmU2l7_6dRELjTSR5HbAEpBAns",
    authDomain: "practica1-5c20c.firebaseapp.com",
    databaseURL: "https://practica1-5c20c.firebaseio.com",
    projectId: "practica1-5c20c",
    storageBucket: "practica1-5c20c.appspot.com",
    messagingSenderId: "416842035855",
    appId: "1:416842035855:web:ef7fae6b4951f4097d76fa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }