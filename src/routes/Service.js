import React from "react";
import Hero from "../components/Hero";
import BannerImg from "../assets/s_3.png";
import ServiceComponent from "../components/ServiceComponent";

const Service = () => {
  return (
    <div>
      <Hero
        cName="hero-mid"
        heroImage={BannerImg}
        title="Turning ideas into impactful solutions."
      />
      <ServiceComponent />
    </div>
  );
};

export default Service;
