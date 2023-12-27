import React from "react";
import Button from "@mui/material/Button";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
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
  return (
    <div className="navigation">
      <nav id="menu">
        <input type="checkbox" id="responsive-menu" onclick="updatemenu()" />
        <label></label>
        <ul className="menu-background">
          <li>
            <a href="/">Strona Glowna</a>
          </li>
          <li>
            <a href="/">O nas</a>
          </li>
          <li>
            <a href="/">Kontakt</a>
          </li>
        </ul>
      </nav>
      <a href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>
    </div>
  );
};

export default Navigation;
