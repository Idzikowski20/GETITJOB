import { React, useEffect } from "react";
import { useState } from "react";
import "./styles.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../../Components/NavigationLoginPage";
import Banner2 from "../../images/banner2.png";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../../FireBase";

function App() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  // Wylogowanie
  const logout = async () => {
    await signOut(auth);
  };
  // przekierowanie
  const navigate = useNavigate();
  // Funkcja logowania
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
      navigate("/AdminPanel");
    } catch (error) {
      console.error(error.message);
    }
  };
  // Jeżeli użytkownik jest zalogowany i w przegladarce wejdzie
  // w /login to funkcja sprawdza czy uzytkownik jest zalogowany
  // jesli tak to przerzuca automatycznie do /AdminPanel
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Jeśli użytkownik jest zalogowany, przekieruj na stronę AdminPanel
        console.log(
          "Nie możesz przejść do strony logowania - już jesteś zalogowany. Wyloguj się i spróbuj ponownie."
        );
        navigate("/AdminPanel");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

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
              <h3>Zaloguj się 🔐</h3>
            </div>
            <div className="titleContainerP">
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
