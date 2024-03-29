// HomePage.jsx
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navigation from "../../Components/AdminPanelNav";
import banner from "../../images/banner.png";
import { Routes, Route, useNavigate } from "react-router-dom";
import JobList from "../../Components/JobList";
import JobDetails from "../../Components/JobDetails";
import data from "../../Components/JobOfferts.json";
import SearchBar from "../../Components/Searchbar";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../FireBase";
import AdminPanelMenu from "../../Components/AdminPanelMenu";

<meta name="viewport" content="initial-scale=1, width=device-width" />;

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [workForm, setWorkForm] = useState("all");
  const [jobCategory, setJobCategory] = useState("all");

  const filterJobs = (job) => {
    const matchTitle = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchWorkForm = workForm === "all" || job.workForm === workForm;
    const matchJobCategory = jobCategory === "all" || job.value === jobCategory;

    return matchTitle && matchWorkForm && matchJobCategory;
  };

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
      <AdminPanelMenu />
      <div className="searchbar2">
        <Routes>
          <Route
            path="/"
            element={
              <div className="templateContainer">
                <SearchBar
                  setSearchTerm={setSearchTerm}
                  setWorkForm={setWorkForm}
                  setJobCategory={setJobCategory}
                />
                <JobList data={data} filterJobs={filterJobs} />
              </div>
            }
          />
          <Route
            path="/job/:jobId"
            element={
              <div className="offer-moredetails">
                <div className="btn-back"></div>
                <JobDetails data={data} />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;
