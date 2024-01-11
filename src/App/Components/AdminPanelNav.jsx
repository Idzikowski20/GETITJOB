import React from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../FireBase";
import { useState } from "react";
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

  return (
    <div className="navigation">
      <div className="InputUserSignIn">
        <div className="SignInUser">
          <p>Witaj! 👋</p>
          {user?.email}
          <Link to="/Dashboard">
            <button className="adminpanelmenu-panels-offer">
              Dodaj Oferte +{" "}
            </button>
          </Link>
        </div>
      </div>
      <nav id="menu">
        <input type="checkbox" id="responsive-menu" onclick="updatemenu()" />
        <label></label>
      </nav>
      <a href="/AdminPanel">
        <img src={logo} className="logo" alt="logo" />
      </a>
    </div>
  );
};

export default Navigation;
