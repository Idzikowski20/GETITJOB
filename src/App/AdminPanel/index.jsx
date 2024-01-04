// HomePage.jsx
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navigation from "../Components/AdminPanelNav";
import banner from "../images/banner.png";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import JobList from "../Components/JobList";
import JobDetails from "../Components/JobDetails";
import data from "../Components/JobOfferts.json";
import SearchBar from "../Components/Searchbar";
import H1Welcome from "../Components/H1Welcome";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FireBase";

<meta name="viewport" content="initial-scale=1, width=device-width" />;

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [workForm, setWorkForm] = useState("all");
  const [jobCategory, setJobCategory] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Jeśli użytkownik nie jest zalogowany, przekieruj na stronę logowania
        console.log("Aby uzyskac dostęp do tej strony - zaloguj się.");
        navigate("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default HomePage;
