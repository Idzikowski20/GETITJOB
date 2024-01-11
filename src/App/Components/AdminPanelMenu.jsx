import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../FireBase";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminPanelMenu = () => {
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
    <div className="adminpanelmenu-container">
      <div>
        <h2>Panel Administratora: {user?.email}</h2>
      </div>
      <div className="adminpanelmenu">
        <Link to="/Dashboard">
          <button className="adminpanelmenu-panels">Dashboard</button>
        </Link>
        <Link to="/Dashboard">
          <button className="adminpanelmenu-panels">Sprawdź statystyki</button>
        </Link>
        <Link to="/Settings">
          <button className="adminpanelmenu-panels">Ustawienia</button>
        </Link>
        <button
          className="adminpanelmenu-logout"
          variant="contained"
          onClick={logout}
        >
          Wyloguj
        </button>
      </div>
    </div>
  );
};

export default AdminPanelMenu;
