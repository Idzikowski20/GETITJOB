import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState } from "react";
import ButtonUsage from "./Components/ButtonUsage";
import Navigation from "./Components/Navigation";
import banner from "./images/banner.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import JobList from "./Components/JobList";
import JobDetails from "./Components/JobDetails";
import data from "./Components/JobOfferts.json";
import SearchBar from "./Components/Searchbar";
import H1Welcome from "./Components/H1Welcome";
<meta name="viewport" content="initial-scale=1, width=device-width" />;

function App() {
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

  return (
    <div className="App">
      <Navigation />
      <div className="welcome-center">
        <img className="banner-img" src={banner} alt="banner"></img>
        <H1Welcome />
        <ButtonUsage />
      </div>
      <div className="searchbar">
        <Router>
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
                  <div className="btn-back">
                    <Link to="/">👈 Wróć do ofert</Link>
                  </div>
                  <JobDetails data={data} />
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
