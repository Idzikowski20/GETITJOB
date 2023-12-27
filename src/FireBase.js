import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAbhBljpAIWLq5FwqKdKkp9y5DLcS4acyU",
  authDomain: "itjobhere.firebaseapp.com",
  projectId: "itjobhere",
  storageBucket: "itjobhere.appspot.com",
  messagingSenderId: "710254114677",
  appId: "1:710254114677:web:174e3e14e52f40095b053c",
  measurementId: "G-MN8V1E21GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
