import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./JobOfferts.json";

function SearchBar() {
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
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Wpisz technologię lub specjalizację"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <select
            id="select-workform"
            onChange={(event) => setWorkForm(event.target.value)}
          >
            <option value="all">Dowolnie</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="on-site">On-site</option>
          </select>
          <select
            id="select-jobcategory"
            onChange={(event) => setJobCategory(event.target.value)}
          >
            <option value="all">Wszystkie kategorie</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
            <option value="ux/ui">UX/UI</option>
            <option value="helpdesk">Helpdesk</option>
            <option value="hr">HR</option>
          </select>
        </div>
        <div className="template_Container">
          {data.filter(filterJobs).map((val) => {
            return (
              <a href={`/job/${val.id}`} key={val.id}>
                <div className="template" key={val.id}>
                  <img src={val.image} alt="" />
                  <h4>{val.title}</h4>
                  <p>{val.form}</p>
                  <p className="joboffer-desc">{val.description}</p>
                  <p className="joboffer-desc">{val.description1}</p>
                  <p className="joboffer-desc">{val.description2}</p>
                  <p className="joboffer-desc">{val.description3}</p>
                  <p className="joboffer-desc">{val.description4}</p>
                  <p className="price">{val.price}PLN</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
