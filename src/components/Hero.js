import React from "react";

const Hero = (props) => {
  return (
    <div className={`${props.cName} relative w-full h-screen`}>
      <img
        alt="HeroImg"
        src={props.heroImage}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center px-4">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-white">
          {props.title}
        </h1>
        <p className="text-lg text-white my-4">{props.text}</p>
        {props.btnText && (
          <a
            href={props.btnUrl}
            className={`${
              props.btnClass === "show"
                ? "inline-block bg-white text-black px-8 py-4 rounded-md text-base font-bold tracking-wider hover:bg-[#25e29a] hover:text-white transition duration-200 ease-in-out"
                : "hidden"
            }`}
          >
            {props.btnText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
