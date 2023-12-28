import React from "react";
import { useState } from "react";
import "./styles.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Components/NavigationLoginPage";
import Banner2 from "../images/banner2.png";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../FireBase";

function App() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  const history = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
        // Zalogowano
      );
      console.log(user);
      console.log("Logowanie zakończone sukcesem.");
      history("/AdminPanel");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Navigation />
      <div className={"App2"}>
        <div className="btn-back3">
          <Link to="/">Strona główna</Link>
        </div>
        <div className="login-container">
          <div className="image-box">
            <img className="image-banner2" src={Banner2} alt="Hr image"></img>
          </div>
          <div className="login-box">
            <div className={"titleContainer2"}>
              <h3>Zaloguj sie 🔐</h3>
            </div>
            <div className="titleContainerP2">
              <p>Dla pracodawcy</p>
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                placeholder="Wpisz swoj e-mail"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
                className={"inputBox"}
                // onClick={onButtonClick}
              />
              <label className="errorLabel"></label>
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                placeholder="Wpisz swoje hasło"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
                className={"inputBox"}
                // onClick={onButtonClick}
              />
              <label className="errorLabel"></label>
            </div>
            <br />
            <div className={"inputContainer"}>
              <button className={"inputButton"} onClick={login}>
                {" "}
                Logowanie{" "}
              </button>
            </div>
            <div>
              <p>
                Nie masz jeszcze konta?{" "}
                <Link to="/register">Załóż konto! ⚙️</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
