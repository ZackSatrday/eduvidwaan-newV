import React from "react";

const Hero = () => {
  return (
    <div className="flex-center h-screen" id="home" >
      <div className="p-16 flex-center shrink flex-col gap-5 bg-head rounded-lg drop-shadow-[0 ,2px, 10px, rgba(0, 0, 0, 1)]">
        <h1 className="text-5xl font-bold font-sora text-center">
          Welcome to Your <br />
          <span className="text-[#7376f0]">Learning Hub</span>
        </h1>
        <h2 className="text-2xl ">Boost Your Knowledge</h2>
        <p className="text-lg w-3/5 text-center">
          Enhance your skills with our expert-curated courses and interactive
          materials.
        </p>
        <button className="button-style w-36 h-12">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
