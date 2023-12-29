import React from "react";
import Button from "@mui/material/Button";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../FireBase";
import { useState } from "react";
import { getAuth } from "firebase/auth";
<meta name="viewport" content="initial-scale=1, width=device-width" />;

function updatemenu() {
  if (document.getElementById("responsive-menu").checked === true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
  } else {
    document.getElementById("menu").style.borderRadius = "10px";
  }
}

const Navigation = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const history = useNavigate();

  const logout = async () => {
    await signOut(auth);
    history("/");
  };

  return (
    <div className="navigation">
      <div className="InputUserSignIn">
        <div className="SignInUser">
          <p>Witaj! 👋</p>
          {user?.email}
        </div>
        <div>
          <Button className="btn-login" variant="contained" onClick={logout}>
            Wyloguj
          </Button>
        </div>
      </div>
      <nav id="menu">
        <input type="checkbox" id="responsive-menu" onclick="updatemenu()" />
        <label></label>
        <ul className="menu-background">
          <li>
            <a href="">Panel Administracji</a>
          </li>
          <li>
            <a href="">Profil</a>
          </li>
          <Button className="btn-login" variant="contained">
            Dodaj Oferte ✅
          </Button>
        </ul>
      </nav>
      <a href="">
        <img src={logo} className="logo" alt="logo" />
      </a>
    </div>
  );
};

export default Navigation;
