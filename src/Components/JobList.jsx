// JobList.jsx
import React from "react";
import { Link } from "react-router-dom";

const JobList = ({ data, filterJobs }) => {
  return (
    <div className="template_Container">
      {data.filter(filterJobs).map((val) => (
        <Link to={`/job/${val.id}`} key={val.id}>
          <div className="template">
            <div className="offer-top">
              <div className="offer-image-title">
                <img src={val.image} alt="logo company" />
                <h3>{val.title}</h3>
              </div>
              <div className="offer-form-price">
                <div className="offer-location">
                  <p>📍 {val.location}</p>
                </div>
                <div className="offer-price-form-company">
                  <p>💻 {val.workForm}</p>
                  <div className="price">
                    <p>{val.price}</p>
                    <span> {"ZŁ (B2B) 💸"}</span>
                  </div>
                  <p>🏙 {val.company}</p>
                </div>
              </div>
            </div>
            <div className="offer-description">
              <p>{val.description}</p>
              <p>{val.description1}</p>
              <p>{val.description2}</p>
              <p>{val.description3}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JobList;
