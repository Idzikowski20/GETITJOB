import { React, useEffect } from "react";
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
  // Przekierowanie
  const navigate = useNavigate();
  // Sprawdzanie jaki uzytkownik jest zalogowany
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  // Funkcja zakładania konta
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
      navigate("/AdminPanel");
    } catch (error) {
      console.error(error.message);
    }
  };

  // Jeżeli użytkownik jest zalogowany i w przegladarce wejdzie
  // w /register to funkcja sprawdza czy uzytkownik jest zalogowany
  // jesli tak to przerzuca automatycznie do /AdminPanel
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Jeśli użytkownik jest zalogowany, przekieruj na stronę AdminPanel
        console.log(
          "Nie możesz przejść do strony rejestracji - Wyloguj się i spróbuj ponownie."
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
        <div className="register-container">
          <div className="image-box">
            <img className="image-banner2" src={Banner2} alt="Hr image"></img>
          </div>
          <div className="register-box">
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
