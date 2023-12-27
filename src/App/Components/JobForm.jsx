// JobForm.jsx
import React, { useState } from "react";

const JobForm = ({ onAddJob }) => {
  const [newJob, setNewJob] = useState({
    id: null,
    image: "",
    title: "",
    company: "",
    location: "",
    description: "",
    workForm: "",
    price: "",
    value: "",
    agreement: "",
    responsibilities: "",
    requirements: "",
    Whatweoffer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generowanie unikalnego ID dla nowej oferty pracy
    const newJobWithId = { ...newJob, id: Date.now() };
    onAddJob(newJobWithId);
    setNewJob({
      id: null,
      image: "",
      title: "",
      company: "",
      location: "",
      description: "",
      workForm: "",
      price: "",
      value: "",
      agreement: "",
      responsibilities: "",
      requirements: "",
      Whatweoffer: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={newJob.image}
          onChange={handleChange}
        />
      </label>
      {/* Dodaj inne pola formularza dla poszczególnych informacji o ofercie pracy */}
      <button type="submit">Dodaj ofertę pracy</button>
    </form>
  );
};

export default JobForm;
