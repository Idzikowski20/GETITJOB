// JobDetails.jsx
import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { useParams, Link } from "react-router-dom";
import data from "./JobOfferts.json";
import { Input } from "@mui/material";

const JobDetails = () => {
  const ref = useRef(null);
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const selectedJob = data.find((job) => job.id === parseInt(jobId, 10));
    setJobDetails(selectedJob);
  }, [jobId]);

  useEffect(() => {
    // Przewijanie do elementu po załadowaniu oferty pracy
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [jobDetails]);

  if (!jobDetails) {
    return <p>Loading...</p>;
  }

  return (
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
        <div className="offer-mid">
          <div className="offer-mid-card">
            <h2>Twoje Zadania 👨‍💻</h2>
            <p>✔️{jobDetails.responsibilities}</p>
            <p>✔️{jobDetails.responsibilities2}</p>
            <p>✔️{jobDetails.responsibilities3}</p>
            <p>✔️{jobDetails.responsibilities4}</p>
            <p>✔️{jobDetails.responsibilities5}</p>
          </div>
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
        <div className="offer-mid">
          <div className="offer-mid-card">
            <h2>Co oferujemy🤑🏆 </h2>
            <p>✔️{jobDetails.Whatweoffer}</p>
            <p>✔️{jobDetails.Whatweoffer2}</p>
            <p>✔️{jobDetails.Whatweoffer3}</p>
            <p>✔️{jobDetails.Whatweoffer4}</p>
            <p>✔️{jobDetails.Whatweoffer5}</p>
            <p>✔️{jobDetails.Whatweoffer6}</p>
          </div>
        </div>
      </div>
      <div className="offer-h1">
        <h1>Aplikuj na to stanowisko</h1>
      </div>
      <div className="offer-aplikuj-container">
        <div className="offer-aplikuj">
          <Input>Imie</Input>
          <Input>Nazwisko</Input>
          <Input>Imie</Input>
          <Input>Imie</Input>
          <input type="checkbox" id="aplikuj" />
          <Button>Aplikuj</Button>
        </div>
      </div>
      <div className="btn-back2">
        <Link to="/">👈 Wróć do ofert</Link>
      </div>
    </div>
  );
};

export default JobDetails;
