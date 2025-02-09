import React from "react";
import GridCards from "./GridCards";
import Cards from "./Cards";
import Development from "./Development";

const WorkSection = () => {
  return (
    <div className="relative ">
      <div className="bg-[url('src/assets/bg.png')] bg-cover bg-center bg-no-repeat opacity-30 absolute w-full h-full"></div>

      <div className="relative py-8 px-6 md:px-15 z-10">
        <h2 className="text-xl md:text-3xl font-semibold md:text-left">
          How It Works
        </h2>
        <img
          src="src/assets/line3.svg"
          className="absolute left-20 transform -translate-x-1/2 md:left-[12%] md:translate-x-0"
          alt="Underline Decoration"
        />
        <p className="text-sm md:text-base  md:text-left py-3 pr-9">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="relative">
        <GridCards />
        <Cards />
        <Development/>
      </div>
    </div>
  );
};

export default WorkSection;
