import React from "react";
import "./DestinationStyles.css";
import strg1 from "../assets/strg1.jpg";
import strg2 from "../assets/strg2.jpg";
import dev1 from "../assets/dev1.jpg";
import dev2 from "../assets/dev2.jpg";
import dgtl1 from "../assets/dgtl1.jpg";
import dgtl2 from "../assets/dgtl2.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destinations">
      <h1>New ways to build</h1>
      <p>
        kendroo is a leading ERP solutions provider specializing in designing
        and developing comprehensive management systems, custom applications,
        and bespoke digital solutions to streamline and optimize business
        operations.
      </p>
      <DestinationData
        className="first-des"
        heading="Brand Strategy"
        text="Our ERP services start and finish with an exceptional strategy focused on enhancing business efficiency. We deliver world-class digital solutions and tools that streamline and optimize operations."
        image1={strg1}
        image2={strg2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Development"
        text="kendroo transforms your vision into reality with our bespoke software solutions.Our solutions are engineered for performance, security, and user satisfaction, ensuring you achieve your strategic goals."
        image1={dev1}
        image2={dev2}
      />
      <DestinationData
        className="first-des"
        heading="Digital Marketing"
        text="Drive your brand's success with kendroo's data-driven and creative digital marketing solutions. We're here to enhance your visibility and convert engagement into results."
        image1={dgtl1}
        image2={dgtl2}
      />
    </div>
  );
};

export default Destination;
