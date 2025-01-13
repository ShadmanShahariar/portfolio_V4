import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { faBars, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/favicon.png";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleMenuClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-20 px-8 flex items-center justify-between bg-white shadow-xl z-50">
      <Link className="flex items-center justify-center space-x-2" to="/">
        <img src={logo} alt="Logo" className="w-8 h-10" />
        <h1 className="text-2xl text-gray-800 cursor-pointer">
          kendroo Dot IO
        </h1>
      </Link>
      <div className="lg:hidden cursor-pointer" onClick={handleMenuClick}>
        <FontAwesomeIcon
          className="text-gray-800 text-xl"
          icon={clicked ? faSquareXmark : faBars}
        />
      </div>
      <ul
        className={`${
          clicked ? "left-0 opacity-100" : "left-full opacity-0"
        } lg:flex lg:space-x-4 lg:items-center lg:opacity-100 absolute lg:static bg-white w-full lg:w-auto top-0 transition-all ease-in-out duration-300 z-10`}
      >
        {MenuItems.map((item, index) => (
          <li key={index} className="relative group">
            <Link
              className={
                "text-gray-800 text-lg px-5 py-3 hover:bg-[#25e29aa6] hover:text-white rounded-md transition duration-200"
              }
              to={item.url}
              target={item.target || "_self"}
            >
              {item.title}
              {item.icon && (
                <FontAwesomeIcon
                  className="ml-2 text-gray-800"
                  icon={item.icon}
                />
              )}
            </Link>
            {/* Submenu for desktop: visible on hover */}
            {item.subMenu && (
              <ul className="absolute top-10 left-0 w-72 bg-white shadow-lg rounded-md z-20 hidden group-hover:block">
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      className="block p-5 text-lg text-gray-800 hover:bg-[#25e29aa6] hover:text-white rounded-md transition duration-200"
                      to={subItem.url}
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
