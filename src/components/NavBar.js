// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { MenuItems } from "./MenuItems";
// import { faBars, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

// const NavBar = () => {
//   const [clicked, setClicked] = useState(false);

//   const handleMenuClick = () => {
//     setClicked(!clicked);
//   };

//   useEffect(() => {
//     const canvas = document.getElementById("logoCanvas");
//     const ctx = canvas.getContext("2d");

//     const width = canvas.width;
//     const height = canvas.height;

//     const textFont = "40px 'Josefin Sans', sans-serif";
//     const kFont = " 44px 'Josefin Sans', sans-serif";
//     const kColor = "#25e29a";
//     const textColor = "#000";

//     const animationInterval = 20000;

//     ctx.font = textFont;

//     const textWidth = ctx.measureText("endroo Dot IO").width;
//     const textHeight = 40;
//     const centerX = width / 2;
//     const centerY = height / 2 + textHeight / 4;

//     const startX = centerX - (textWidth + 20) / 2;
//     let kPosition = width + 30;
//     const endPosition = startX;

//     const speed = 4;

//     const drawLogo = () => {
//       ctx.clearRect(0, 0, width, height);

//       // Draw "endroo" text
//       ctx.font = textFont;
//       ctx.fillStyle = textColor;
//       ctx.fillText("endroo Dot IO", startX + 25, centerY);

//       // Draw the animated "K"
//       ctx.font = kFont;
//       ctx.fillStyle = kColor;
//       ctx.fillText("K", kPosition, centerY);

//       if (kPosition > endPosition) {
//         kPosition -= speed;
//         requestAnimationFrame(drawLogo);
//       } else {
//         ctx.fillText("K", endPosition, centerY);
//         setTimeout(() => {
//           kPosition = width + 30;
//           requestAnimationFrame(drawLogo);
//         }, animationInterval);
//       }
//     };

//     drawLogo();
//   }, []);

//   return (
//     <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-20 px-8 flex items-center justify-between bg-white shadow-xl z-50 ">
//       <Link
//         className="no-underline cursor-pointer w-36 lg:w-44 h-full active"
//         to="/"
//       >
//         <div className="w-full h-full flex items-center">
//           <canvas
//             id="logoCanvas"
//             width="310"
//             height="100"
//             className="align-middle w-[240px] h-[80px]"
//           ></canvas>
//         </div>
//       </Link>
//       <div className="lg:hidden cursor-pointer" onClick={handleMenuClick}>
//         <FontAwesomeIcon
//           className="text-gray-800 text-xl"
//           icon={clicked ? faSquareXmark : faBars}
//         />
//       </div>
//       <ul
//         className={`${
//           clicked ? "left-0 opacity-100" : "left-full opacity-0"
//         } lg:flex lg:space-x-4 lg:items-center lg:opacity-100 absolute lg:static bg-white w-full lg:w-auto top-0 transition-all ease-in-out duration-300 z-10`}
//       >
//         {MenuItems.map((item, index) => (
//           <li key={index} className="relative group">
//             <Link
//               className={
//                 "text-gray-800 text-lg px-5 py-3 hover:bg-[#25e29aa6] hover:text-white rounded-md transition duration-200"
//               }
//               to={item.url}
//               target={item.target || "_self"}
//             >
//               {item.title}
//               {item.icon && (
//                 <FontAwesomeIcon
//                   className="ml-2 text-gray-800"
//                   icon={item.icon}
//                 />
//               )}
//             </Link>
//             {item.subMenu && (
//               <ul className="absolute top-10 left-0 w-72 bg-white shadow-lg rounded-md z-20 hidden group-hover:block">
//                 {item.subMenu.map((subItem, subIndex) => (
//                   <li key={subIndex}>
//                     <Link
//                       className="block p-5 text-lg text-gray-800 hover:bg-[#25e29aa6] hover:text-white rounded-md transition duration-200"
//                       to={subItem.url}
//                     >
//                       {subItem.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { faBars, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import logoImageSrc from "../assets/favicon.png"; // Adjust path based on your folder structure

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleMenuClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const canvas = document.getElementById("logoCanvas");
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    const textFont = "40px 'Josefin Sans', sans-serif";
    const textColor = "#000";
    const animationInterval = 15000; // 30 seconds

    const logoImage = new Image();
    logoImage.src = logoImageSrc; // Use the imported path to the image

    const imageWidth = 50; // Adjust based on your logo size
    const imageHeight = 60;
    const centerY = height / 2;
    const startX = (width - ctx.measureText("Kendroo Dot IO").width - 5) / 2;

    let imageX = width + imageWidth; // Start outside the canvas
    const endX = startX - imageWidth - 70; // Final position for the logo
    const speed = 4;

    logoImage.onload = () => {
      console.log("Logo image loaded successfully!"); // Debugging: Check if the image loaded
      drawLogo(); // Start the animation after the image is loaded
    };

    logoImage.onerror = (e) => {
      console.log("Error loading image:", e); // Debugging: Check for loading errors
    };

    const drawLogo = () => {
      ctx.clearRect(0, 0, width, height); // Clear the canvas for each frame

      // Draw "endroo" text
      ctx.font = textFont;
      ctx.fillStyle = textColor;
      ctx.fillText("Kendroo Dot IO", startX - 70, centerY + 15);

      // Draw the moving logo (image)
      if (logoImage.complete) {
        ctx.drawImage(
          logoImage,
          imageX,
          centerY - imageHeight / 2,
          imageWidth,
          imageHeight
        );
      }

      if (imageX > endX) {
        imageX -= speed;
        requestAnimationFrame(drawLogo);
      } else {
        ctx.drawImage(
          logoImage,
          endX,
          centerY - imageHeight / 2,
          imageWidth,
          imageHeight
        );

        // Reset animation after 30 seconds
        setTimeout(() => {
          imageX = width + imageWidth;
          requestAnimationFrame(drawLogo);
        }, animationInterval);
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-20 px-8 flex items-center justify-between bg-white shadow-xl z-50 ">
      <Link
        className="no-underline cursor-pointer w-38 lg:w-46 h-full active"
        to="/"
      >
        <div className="w-full h-full flex items-center">
          <canvas
            id="logoCanvas"
            width="370" // Adjust canvas size if necessary
            height="120" // Adjust canvas size if necessary
            className="align-middle w-[240px] h-[80px]"
          ></canvas>
        </div>
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
