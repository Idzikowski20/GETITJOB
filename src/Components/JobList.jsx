// JobList.jsx
import React from "react";
import { Link } from "react-router-dom";

const JobList = ({ data, filterJobs }) => {
  return (
    <div className="template_Container">
      {data.filter(filterJobs).map((val) => (
        <Link to={`/job/${val.id}`} key={val.id}>
          <div className="template">
            <div className="offer-image">
              <img src={val.image} alt="logo company" />
            </div>
            <div>
              <div className="offer-title">
                <h3>{val.title}</h3>
              </div>
              <div className="offer-description">
                <p>{val.description}</p>
                <p>{val.description}</p>
                <p>{val.description}</p>
              </div>
            </div>
            <div className="offer-form-price">
              <p>{val.workForm}</p>
              <p className="price">{val.price}PLN</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JobList;
