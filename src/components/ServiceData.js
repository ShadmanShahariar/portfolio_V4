import "./TripStyles.css";

import React from "react";

const ServiceData = (props) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.timage} alt="card image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default ServiceData;
