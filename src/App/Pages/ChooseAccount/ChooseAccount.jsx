import { React, useEffect } from "react";
import { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../../Components/NavigationLoginPage";
import Banner2 from "../../images/banner2.png";

function App() {
  const navigate = useNavigate();

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
              <h3>Wybierz typ konta:</h3>
            </div>
            <div>
              <Link to="/login-admin">
                <button className={"inputButton"}> PRACODAWCA </button>
              </Link>
              <Link to="/login-user">
                <button className={"inputButton"}> KLIENT </button>
              </Link>
            </div>
            <br />
            <div className={"inputContainer"}>
              <label className="errorLabel"></label>
            </div>
            <br />
            <div className={"inputContainer"}>
              <label className="errorLabel"></label>
            </div>
            <br />
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
