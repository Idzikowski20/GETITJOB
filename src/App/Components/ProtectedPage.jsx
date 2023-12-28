import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../FireBase";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Jeśli użytkownik nie jest zalogowany, przekieruj na stronę logowania
        navigate("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return <div>{/* Zawartość aplikacji */}</div>;
}

export default App;
