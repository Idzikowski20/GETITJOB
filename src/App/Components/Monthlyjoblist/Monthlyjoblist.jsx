// JobList.jsx
import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
<link
  href="https://fonts.cdnfonts.com/css/public-pixel"
  rel="stylesheet"
></link>;

const JobList = ({ data, filterJobs }) => {
  return (
    <div className="monthly_Container">
      {data.filter(filterJobs).map((val) => (
        <Link to={`/job/${val.id}`} key={val.id}>
          <div className="monthlyoffert">
            <div className="monthly-inside">
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
                    <p>{val.price} PLN</p>
                    <span>{val.agreement}💸</span>
                  </div>
                  <p>🕵️‍♂️ {val.company}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JobList;
