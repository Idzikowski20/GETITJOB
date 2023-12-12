// JobDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./JobOfferts.json";

const JobDetails = () => {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    // Pobierz szczegóły oferty pracy na podstawie jobId
    const selectedJob = data.find((job) => job.id === parseInt(jobId, 10));
    setJobDetails(selectedJob);
  }, [jobId]);

  if (!jobDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="jobdetails">
      <h2>Szczegóły pracy</h2>
      <p>Stanowisko pracy: {jobDetails.title}</p>
      <p>Opis {jobDetails.description}</p>
      <p>Tryb pracy: {jobDetails.workForm}</p>
      {/* Dodaj inne informacje o ofercie pracy */}
    </div>
  );
};

export default JobDetails;
