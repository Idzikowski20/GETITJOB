import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../FireBase";
import "./style.css";

function Navigation() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  /*
  Slidemenu
*/
  (function () {
    var $body = document.body,
      $menu_trigger = $body.getElementsByClassName("menu-trigger")[0];

    if (typeof $menu_trigger !== "undefined") {
      $menu_trigger.addEventListener("click", function () {
        $body.className = $body.className == "menu-active" ? "" : "menu-active";
      });
    }
  }).call(this);

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

  if (user) {
    return (
      <div>
        <nav id="slide-menu">
          <ul>
            <li class="timeline">Timeline</li>
            <li class="events">Events</li>
            <li class="calendar">Calendar</li>
            <li class="sep settings">Settings</li>
            <li class="logout">Wyloguj</li>
          </ul>
        </nav>
        {/* <!-- Content panel --> */}
        <div id="content">
          <div class="menu-trigger"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <nav id="slide-menu">
          <ul>
            <li class="timeline">Timeline</li>
            <li class="events">Events</li>
            <li class="calendar">Calendar</li>
            <li class="sep settings">Settings</li>
            <li class="logout">
              <a onClick={handleLoginClick}>Zaloguj</a>
            </li>
          </ul>
        </nav>
        {/* <!-- Content panel --> */}
        <div id="content">
          <div class="menu-trigger"></div>
        </div>
      </div>
    );
  }
}

export default Navigation;
