import React from "react";
import Hero from "../components/Hero";
import BannerImg from "../assets/c_2.jpg";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Hero
        cName="relative w-full h-[70vh]" // Specific for "hero-mid" style
        heroImage={BannerImg}
        title="Feel free to reach out—let's create something amazing together!"
        btnClass="hide" // Since no button is required, set to "hide"
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
