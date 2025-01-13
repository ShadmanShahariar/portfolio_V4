import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faGithub,
  faLinkedinIn,
  faSquareFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-black text-white px-8 py-8">
      {/* Top Section */}
      <div className="flex flex-wrap items-center justify-between text-left">
        <div>
          <h1 className="text-lg font-bold">Kendroo Dot IO</h1>
          <p>Centralized solution for all</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/kendroo.io">
            <FontAwesomeIcon
              className="text-white text-2xl hover:text-[#25e29a] transition duration-300"
              icon={faSquareFacebook}
            />
          </a>
          <a href="https://github.com/kendroo-io">
            <FontAwesomeIcon
              className="text-white text-2xl hover:text-[#25e29a] transition duration-300"
              icon={faGithub}
            />
          </a>
          <a href="https://www.linkedin.com/company/kendroo-io">
            <FontAwesomeIcon
              className="text-white text-2xl hover:text-[#25e29a] transition duration-300"
              icon={faLinkedinIn}
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              className="text-white text-2xl hover:text-[#25e29a] transition duration-300"
              icon={faXTwitter}
            />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap justify-between text-left pt-8">
        {/* First Part */}
        <div className="w-full md:w-1/4 flex flex-wrap">
          {/* Project & Community  Section */}
          <div className="w-full mb-6">
            <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
            <p className="text-gray-300">
              Email: info@kendroo.io <br />
              Phone: +880 189 6274319
            </p>
          </div>
        </div>

        {/* Second Part */}
        <div className="w-full md:w-3/4 mb-6 flex flex-col md:flex-row">
          <div>
            <h4 className="text-xl font-semibold mb-3">Address</h4>
            <p className="text-gray-300">
              Kendroo Dot IO
              <br />
              Level-4, House-826, East Shewrapara, Dhaka 1216,
            </p>
          </div>

          {/* Google Map Section */}
          <div className="w-full">
            <h4 className="text-xl font-semibold mb-3">Our Location</h4>
            <iframe
              className=" h-64 md:h-80 border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7301.666056537522!2d90.3707990092946!3d23.78895946173427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7936b6e9151%3A0x7b026d1e4ef2a120!2sKendroo.io!5e0!3m2!1sen!2sbd!4v1736678422831!5m2!1sen!2sbd"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center pt-6 border-t border-gray-700">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} KendrooDotIO. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
