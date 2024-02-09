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
    return <div></div>;
  } else {
    return <div></div>;
  }
}

export default Navigation;
