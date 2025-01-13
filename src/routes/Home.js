import React from "react";
import Hero from "../components/Hero";
import BannerImg from "../assets/2_2.jpg";
import Destination from "../components/Destination";
import OdooSub from "../components/OdooSub";
import ServiceComponent from "../components/ServiceComponent";

const Home = () => {
  return (
    <div>
      <Hero
        cName="hero"
        heroImage={BannerImg}
        title="Smart Solutions to Scale Your Brand"
        text="Developing ERP, Websites, Apps and Tailor-Made Digital Solutions"
        btnUrl="/contact"
        btnClass="show"
        btnText="Get a Quote"
      />
      <OdooSub />
      <Destination />
      <ServiceComponent />
    </div>
  );
};

export default Home;
