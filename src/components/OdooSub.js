import React from "react";
import OdooMain from "../assets/odoomain.png";
import Odoo1 from "../assets/odoo1.png";
import Odoo2 from "../assets/odoo2.png";
import Odoo3 from "../assets/odoo3.png";

const OdooSub = () => {
  return (
    <div className="bg-gray-100 py-5 md:p-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div>
              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                <img
                  className="w-[210px] h-[100px]"
                  src={Odoo1}
                  alt="Odoo ERP Service"
                />
                <img
                  className="w-[210px] h-[100px]"
                  src={Odoo2}
                  alt="Odoo ERP Service"
                />
                <img
                  className="w-[210px] h-[100px]"
                  src={Odoo3}
                  alt="Odoo ERP Service"
                />
              </div>
              <h1 className="mt-5 text-2xl font-bold text-gray-800 justify-start">
                Expert Odoo ERP Service <br />
                Provider from Bangladesh
              </h1>
              <a
                href="/contact"
                role="button"
                className="bg-[#25e29aa6] text-white py-2 px-4 rounded mt-5 inline-block border-2 border-[#086d46e0] hover:bg-transparent hover:text-black cursor-pointer transition-colors duration-500"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0 shadow-lg shadow-black/55">
            <img className="max-w-full" src={OdooMain} alt="Odoo Background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdooSub;
