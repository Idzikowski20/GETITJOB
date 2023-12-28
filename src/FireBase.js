import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbhBljpAIWLq5FwqKdKkp9y5DLcS4acyU",
  authDomain: "itjobhere.firebaseapp.com",
  projectId: "itjobhere",
  storageBucket: "itjobhere.appspot.com",
  messagingSenderId: "710254114677",
  appId: "1:710254114677:web:174e3e14e52f40095b053c",
  measurementId: "G-MN8V1E21GZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
