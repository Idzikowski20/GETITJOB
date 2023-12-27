import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { Link } from "react-router-dom";
import Navigation from "../Components/NavigationLoginPage";
import Banner2 from "../images/banner2.png";
import auth from "../../FireBase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredentials) => {
        console.log(useCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <form onSubmit={signIn}>
          <div className="image-box">
            <img className="image-banner2" src={Banner2} alt="Hr image"></img>
          </div>
          <div className="login-box">
            <div className={"titleContainer"}>
              <p>Zaloguj</p>
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
            <div className={"inputContainer"}>
              <input
                value={password}
                placeholder="Wpisz swoje hasło"
                onChange={(ev) => setPassword(ev.target.value)}
                className={"inputBox"}
              />
              <label className="errorLabel">{passwordError}</label>
            </div>
            <div className={"inputContainer"}>
              <button className={"inputButton"} type="submit" onChange={signIn}>
                Logowanie
              </button>
            </div>
            <div>
              <p>
                Nie masz konta? <Link to="/register">Stwórz konto!</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
