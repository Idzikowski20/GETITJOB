// JobDetails.jsx
import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import data from "./JobOfferts.json";

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
    <div ref={ref} className="jobdetails-container">
      <h2>Szczegóły pracy</h2>
      <div className="jobdetails-top">
        <div>
          <img src={jobDetails.image} alt="logo company" />
        </div>
        <div className="jobdetails-title">
          <div>{jobDetails.company}</div>
          <div>{jobDetails.title}</div>
          <div>📍 {jobDetails.location}</div>
        </div>
        <div>
          <Button id="btn-explore" variant="contained">
            Aplikuj
          </Button>
        </div>
      </div>
      <div className="jobdetails-description">
        <div className="offer-description">
          <p>{jobDetails.description}</p>
          <p>{jobDetails.description1}</p>
          <p>{jobDetails.description2}</p>
          <p>{jobDetails.description3}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
