import React from "react";
import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
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

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  // const onButtonClick = () => {
  //   // Set initial error values to empty
  //   setEmailError("");
  //   setPasswordError("");

  //   // Check if the user has entered both fields correctly
  //   if ("" === email) {
  //     setEmailError("Please enter your email");
  //     return;
  //   }

  //   if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
  //     setEmailError("Please enter a valid email");
  //     return;
  //   }

  //   if ("" === password) {
  //     setPasswordError("Please enter a password");
  //     return;
  //   }

  //   if (password.length < 7) {
  //     setPasswordError("The password must be 8 characters or longer");
  //     return;
  //   }

  //   // Authentication calls will be made here...
  // };

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
            <div className={"titleContainer"}>
              <h3>Zaloguj się</h3>
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
                Zaloguj się{" "}
              </button>
            </div>
            <div className="InputUser">
              <p>Zalogowano jako:</p>
              {user?.email}
            </div>
            <div>
              <p>
                Nie masz jeszcze konta? <Link to="/register">Załóż konto!</Link>
              </p>
            </div>
            <button className="btn-logout" onClick={logout}>
              Wyloguj
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
