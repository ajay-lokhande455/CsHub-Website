import React from "react";

function HeroSection() {
  return (
    <div className="relative bg-[#072F53] w-full min-h-[75vh] overflow-hidden">
      <img
        src="/assets/46b8d944711aba19045cf3c35cde7feb.png"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-15"
        alt="Background Image"
      />
      <div className="relative flex flex-col md:flex-row items-center px-6 md:px-6 gap-4 md:gap-8">

        <div className="w-full md:w-[50%] relative h-[60vh] md:h-[75vh] flex justify-center">
          <img src="/assets/bgline.svg" className="opacity-10 absolute z-0 w-20 left-0 top-16 hidden md:block" />
          <img
            className="w-[80%] md:w-[90%] absolute bottom-0"
            src="/assets/hero-img.svg"
            alt="Hero Image"
          />
        </div>

        <div className="w-full md:w-[50%] h-auto md:h-[75vh] text-white flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <div className="mx-4">

            <button className="px-5 py-2.5 bg-[#FBC108] rounded-sm font-bold text-[#072F53]">
              EXPERT INSTRUCTION
            </button>

            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight md:leading-normal py-2 relative">
              Build Skills With Experts Any Time, Anywhere.
              <img src="/assets/line.svg" className="absolute left-1/2 md:left-24 bottom-1 transform -translate-x-1/2 md:translate-x-0" />
            </h1>

            <p className="text-lg md:text-xl py-4">
              We invest in personnel, technological innovations, and
              infrastructure and have established regional and international
              offices.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
