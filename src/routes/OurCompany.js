import React from "react";
import Hero from "../components/Hero";
import BannerImg from "../assets/s_3.png";

const OurCompany = () => {
  return (
    <div>
      <Hero
        cName="hero-mid"
        heroImage={BannerImg}
        title="Turning ideas into impactful solutions."
      />
    </div>
  );
};

export default OurCompany;
