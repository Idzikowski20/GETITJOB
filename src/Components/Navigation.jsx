import React from "react";
import Button from "@mui/material/Button";
import logo from "../images/logo.png";
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
      <Button className="btn-login" variant="contained">
        Login
      </Button>
      <nav id="menu">
        <input type="checkbox" id="responsive-menu" onclick="updatemenu()" />
        <label></label>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a class="dropdown-arrow" href="">
              Products
            </a>
            <ul class="sub-menus">
              <li>
                <a href="">Products 1</a>
              </li>
              <li>
                <a href="">Products 2</a>
              </li>
              <li>
                <a href="">Products 3</a>
              </li>
              <li>
                <a href="">Products 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a class="dropdown-arrow" href="">
              Services
            </a>
            <ul class="sub-menus">
              <li>
                <a href="">Services 1</a>
              </li>
              <li>
                <a href="">Services 2</a>
              </li>
              <li>
                <a href="">Services 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <a href="../app.jsx">
        <img src={logo} className="logo" alt="logo" />
      </a>
    </div>
  );
};

export default Navigation;
