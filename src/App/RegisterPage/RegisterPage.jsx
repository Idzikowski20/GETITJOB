import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { Link } from "react-router-dom";
import Navigation from "../Components/NavigationLoginPage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Banner2 from "../images/banner2.png";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const navigate = useNavigate();

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    // Authentication calls will be made here...
  };

  return (
    <div className={"App2"}>
      <Navigation />
      <div className="btn-back3">
        <Link to="/">Strona główna</Link>
      </div>
      <div className="login-container">
        <div className="image-box">
          <img className="image-banner2" src={Banner2} alt="Hr image"></img>
        </div>
        <div className="login-box">
          <div className={"titleContainer"}>
            <p>Załóż konto</p>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              value={email}
              placeholder="Wpisz swoj e-mail"
              onChange={(ev) => setEmail(ev.target.value)}
              className={"inputBox"}
            />
            <label className="errorLabel">{emailError}</label>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              value={password}
              placeholder="Wpisz swoje hasło"
              onChange={(ev) => setPassword(ev.target.value)}
              className={"inputBox"}
            />
            <label className="errorLabel">{passwordError}</label>
          </div>
          <br />
          <div className={"inputContainer"}>
            <button className={"inputButton"} type="button" onSubmit={signIn}>
              {" "}
              Zaloguj{" "}
            </button>
          </div>
          <div>
            <p>
              Masz już konto? <Link to="/login">Zaloguj się!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
