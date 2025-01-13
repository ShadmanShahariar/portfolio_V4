import ServiceData from "./ServiceData";
import "./TripStyles.css";
import Trip1 from "../assets/2.png";
import Trip2 from "../assets/service-1.png";
import Trip3 from "../assets/service-2.png";
import Trip4 from "../assets/service-4.png";
import Trip5 from "../assets/service-3.png";
import Trip6 from "../assets/service-5.png";

import React from "react";

const ServiceComponent = () => {
  return (
    <div className="trip">
      <h1>Creative Services</h1>
      <div className="tripcard">
        <ServiceData
          timage={Trip1}
          heading="Artificial Intelligence"
          text="Future of Automation"
        />
        <ServiceData
          timage={Trip2}
          heading="ERP Solutions"
          text="Software Development"
        />
        <ServiceData
          timage={Trip3}
          heading="Web Application"
          text="Dynamic Web Based Application"
        />
        <ServiceData
          timage={Trip4}
          heading="Cyber Security"
          text="Protecting Your Data in Digital Way"
        />
        <ServiceData
          timage={Trip5}
          heading="Digital Marketing"
          text="Promoting Your Brand Globally"
        />
        <ServiceData
          timage={Trip6}
          heading="Cloud Services"
          text="Scalable and secure cloud solutions"
        />
      </div>
    </div>
  );
};

export default ServiceComponent;
