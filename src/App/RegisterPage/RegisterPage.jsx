import React from "react";
import { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Components/NavigationLoginPage";
import Banner2 from "../images/banner2.png";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../FireBase";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const history = useNavigate();

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      alert(
        "Twoje konto zostało pomyslnie utworzone. Kliknij Ok aby zostać automatycznie przekierowany na strone."
      );
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
            <div className={"titleContainer"}>
              <h3>Załóż konto 🔐</h3>
            </div>
            <div className="titleContainerP">
              <p>Dla pracodawcy</p>
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                placeholder="Wpisz swoj e-mail"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
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
                  setRegisterPassword(event.target.value);
                }}
                className={"inputBox"}
                // onClick={onButtonClick}
              />
              <label className="errorLabel"></label>
            </div>
            <br />
            <div className={"inputContainer"}>
              <button className={"inputButton"} onClick={register}>
                {" "}
                Stwórz{" "}
              </button>
            </div>
            <div>
              <p>
                Masz już konto? <Link to="/login">Zaloguj się! 💪</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
