import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FireBase";

function Navigation() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLoginClick = () => {
    if (user) {
      // Jeśli użytkownik jest zalogowany, przekieruj na stronę AdminPanel
      alert("Zostałeś automatycznie zalogowany");
      navigate("/AdminPanel");
    } else {
      // Jeśli użytkownik nie jest zalogowany, przekieruj na stronę logowania
      console.log("Aby uzyskać dostęp do tej strony - zaloguj się.");
      navigate("/Login");
    }
  };

  return (
    <div className="navigation">
      <Button
        className="btn-login"
        variant="contained"
        onClick={handleLoginClick}
      >
        Zaloguj
      </Button>
      <nav id="menu">
        <input type="checkbox" id="responsive-menu" onClick="updatemenu()" />
        <label></label>
        <ul className="menu-background">
          <li>
            <a href="/">Strona Główna</a>
          </li>
          <li>
            <a href="/">O nas</a>
          </li>
          <li>
            <a href="/">Kontakt</a>
          </li>
          <Button className="btn-login" variant="contained">
            Dodaj ogłoszenie
          </Button>
        </ul>
      </nav>
      <a href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>
    </div>
  );
}

export default Navigation;
