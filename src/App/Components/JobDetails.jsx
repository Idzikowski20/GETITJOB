// JobDetails.jsx
import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { useParams, Link } from "react-router-dom";
import data from "./JobOfferts.json";
import { Input } from "@mui/material";
import companyimage from "../images/companyimage.png";
import HR from "../images/HR.png";

const JobDetails = () => {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const ref = useRef(); // Dodana deklaracja ref

  useEffect(() => {
    const selectedJob = data.find((job) => job.id === parseInt(jobId, 10));
    setJobDetails(selectedJob);
  }, [jobId]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [jobDetails]);

  if (!jobDetails) {
    return <p>Ładowanie oferty...</p>;
  }
  return (
    <div className="App">
      <div ref={ref} className="template_Container2">
        <div className="template">
          <div className="offer-top">
            <div className="offer-image-title">
              <img src={jobDetails.image} alt="logo company" />
              <h3>{jobDetails.title}</h3>
            </div>
            <div className="offer-form-price">
              <div className="offer-location">
                <p>📍 {jobDetails.location}</p>
              </div>
              <div></div>
              <div className="offer-price-form-company">
                <p>💻 {jobDetails.workForm}</p>
                <div className="price">
                  <p>{jobDetails.price} PLN</p>
                  <span>{jobDetails.agreement}💸</span>
                </div>
                <p>🕵️‍♂️ {jobDetails.company}</p>
              </div>
            </div>
          </div>
          <div className="offer-description">
            <span>Wymagane technologie:</span>
            <p>{jobDetails.description}</p>
            <p>{jobDetails.description1}</p>
            <p>{jobDetails.description2}</p>
            <p>{jobDetails.description3}</p>
          </div>
        </div>
        <div className="offer-mid-container">
          <div className="offer-mid2">
            <div className="offer-mid-card">
              <h2>Twoje Zadania 👨‍💻</h2>
              <p>✔️{jobDetails.responsibilities}</p>
              <p>✔️{jobDetails.responsibilities2}</p>
              <p>✔️{jobDetails.responsibilities3}</p>
              <p>✔️{jobDetails.responsibilities4}</p>
              <p>✔️{jobDetails.responsibilities5}</p>
            </div>
          </div>
          <div className="offer-mid">
            <div className="offer-mid-card">
              <h2>Nasze Wymagania 🤝</h2>
              <p>✔️{jobDetails.requirements}</p>
              <p>✔️{jobDetails.requirements2}</p>
              <p>✔️{jobDetails.requirements3}</p>
              <p>✔️{jobDetails.requirements4}</p>
              <p>✔️{jobDetails.requirements5}</p>
              <p>✔️{jobDetails.requirements6}</p>
              <p>✔️{jobDetails.requirements7}</p>
            </div>
          </div>
          <div className="offer-mid2">
            <div className="offer-mid-card">
              <h2>Co oferujemy🤑🏆 </h2>
              <p>✔️{jobDetails.Whatweoffer}</p>
              <p>✔️{jobDetails.Whatweoffer2}</p>
              <p>✔️{jobDetails.Whatweoffer3}</p>
              <p>✔️{jobDetails.Whatweoffer4}</p>
              <p>✔️{jobDetails.Whatweoffer5}</p>
            </div>
          </div>
        </div>
        <div className="offer-h1">
          <div className="btn-back2">
            <Link to="/">👈 Wróć do ofert</Link>
          </div>
          <img
            className="companyimage"
            src={companyimage}
            alt="company image"
          ></img>
          <h1>Aplikuj na to stanowisko</h1>
        </div>
        <div className="offer-aplikuj-container">
          <div className="offer-aplikuj">
            <p>Imie</p>
            <Input></Input>
            <p>Nazwisko</p>
            <Input></Input>
            <p>E-mail</p>
            <Input></Input>
            <p>Numer telefonu</p>
            <Input></Input>
            <p>Plik CV</p>
            <Button id="btn-explore" variant="contained">
              Wgraj plik CV
            </Button>
            <div className="checkbox-aplikuj">
              <p>Akceptuje warunki rekrutacyjne</p>
              <input type="checkbox" id="aplikuj" />
            </div>
            <Button id="btn-explore" variant="contained">
              Aplikuj
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
