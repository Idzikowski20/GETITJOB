// HomePage.jsx
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState } from "react";
import ButtonUsage from "../../Components/ButtonUsage";
import Navigation from "../../Components/Navigation/Navigation";
import banner from "../../images/banner.png";
import { Routes, Route, Link } from "react-router-dom";
import JobList from "../../Components/JobList";
import Monthlyjoblist from "../../Components/Monthlyjoblist/Monthlyjoblist.jsx";
import JobDetails from "../../Components/JobDetails";
import data from "../../Components/JobOfferts.json";
import data2 from "../../Components/JobMonthly.json";
import SearchBar from "../../Components/Searchbar";
import H1Welcome from "../../Components/H1Welcome";
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

  return (
    <>
      <Navigation />
      <div className="App">
        <div className="banner">
          <div>
            <img className="banner-img" src={banner} alt="banner"></img>
          </div>
          <div className="banner-text">
            <h2>Stali partnerzy mają jeszcze lepiej!</h2>
            <p>Proponujemy atrakcyjne warunki na pakiety ogłoszeń.</p>
            <p>Masz pytania? Skontaktuj się z nami.</p>
            <div>
              <button className="btn-banner">+48 507 244 174</button>
              <button className="btn-banner">sales@getitjob.pl</button>
            </div>
          </div>
        </div>
        <div className="welcome-center">
          <H1Welcome />
          <ButtonUsage />
        </div>

        <div className="Monthlyjoblist">
          <div className="monthly-h2">
            <h2>Najlepsze oferty miesiąca 🤯</h2>
          </div>
          <div>
            <Monthlyjoblist data={data2} filterJobs={filterJobs} />
          </div>
        </div>

        <div className="searchbar">
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
    </>
  );
}

export default HomePage;
