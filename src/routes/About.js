import React from "react";
import Hero from "../components/Hero";
import BannerImg from "../assets/7_7.jpg";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <div>
      <Hero
        cName="hero-mid"
        heroImage={BannerImg}
        title="Get to Know the Smart Team who Build Smart Solutions"
      />
      <AboutUs />
    </div>
  );
};

export default About;
