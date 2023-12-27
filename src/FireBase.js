// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbhBljpAIWLq5FwqKdKkp9y5DLcS4acyU",
  authDomain: "itjobhere.firebaseapp.com",
  projectId: "itjobhere",
  storageBucket: "itjobhere.appspot.com",
  messagingSenderId: "710254114677",
  appId: "1:710254114677:web:174e3e14e52f40095b053c",
  measurementId: "G-MN8V1E21GZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default firebaseConfig;
