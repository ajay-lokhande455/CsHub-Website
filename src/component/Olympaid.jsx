import React from "react";
import star1 from "../assets/star1.svg"
import line from "../assets/line.svg"
import pencil from "../assets/pencil.svg"
import user from "../assets/user.svg"
import cities from "../assets/cities.svg"
import papers from "../assets/papers.svg"

const Olympiad = () => {
  return (
    <div className="w-full overflow-hidden ">

      <div className="hidden md:block">
        <img
          src={star1}
          className="absolute left-0 top-40 w-auto h-auto"
          alt="Star Decoration"
        />
      </div>

      <div className="relative w-full h-auto md:h-[60vh] bg-[url('/assets/dots.png')] bg-cover bg-center bg-no-repeat">
        <div className="h-auto md:h-[40vh] my-10 md:my-20 px-6 md:px-15">
          <button className="px-5 py-2.5 bg-[#FBC108] rounded-md hover:bg-red-700">
            Who we are
          </button>
          <div className="relative py-4">
            <h2 className="text-xl md:text-3xl font-semibold  md:text-left">
              India's Largest Online Preparation Platform for Olympiad Exams
            </h2>
            <img
              src={line}
              className="absolute left-1/2 md:left-[30%] transform -translate-x-1/2 md:translate-x-0"
              alt="Underline Decoration"
            />
          </div>
          <p className="text-sm md:text-base  md:text-left py-3 pr-9">
            Our preparation platform helps in Olympiad exam excellence through
            comprehensive practice and mock test papers. It consists of more
            than 3,00,000 questions, providing extensive practice to students to
            handle difficult and tricky questions that come in various
            Olympiads. Moreover, you receive continuous feedback on your child's
            performance. It's an initiative by graduates from Indian Institute
            of Technology (IITs) and top universities in the US to create a
            personalized and in-depth online learning experience.
          </p>
          <div className="flex  md:justify-start">
            <button className="px-7 py-2.5 bg-[#072F53] text-white rounded-full my-5">
              Read More
            </button>
            <div className="hidden md:block">
              <img
                src={pencil}
                className="absolute right-0 bottom-0 z-30 w-16 sm:w-24 lg:w-32"
                alt="Pencil Decoration"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="h-[30vh] md:h-[15vh] bg-[#072F53] relative">
        <div className="w-full h-auto   absolute">
          <div className="my-2 mx-4 md:mx-15 flex justify-between flex-wrap">
            <div className="flex gap-7 flex-wrap items-center justify-center md:justify-start">
              <img src={user} alt="User Icon" className="w-12 sm:w-16 lg:w-20" />
              <div className="text-[#FBC108] flex flex-col justify-center items-center text-center">
                <p className="text-xl font-semibold text-white">Registered User</p>
                <p className="text-3xl font-bold py-2">1000+</p>
              </div>
            </div>
            <div className="flex gap-7 flex-wrap items-center justify-center md:justify-start">
              <img src={cities} alt="Cities Icon" className="w-12 sm:w-16 lg:w-20" />
              <div className="text-[#FBC108] flex flex-col justify-center items-center text-center">
                <p className="text-xl font-semibold text-white">Towns And Cities</p>
                <p className="text-3xl font-bold py-2">600+</p>
              </div>
            </div>
            <div className="flex gap-7 flex-wrap items-center justify-center md:justify-start">
              <img src={papers} alt="Papers Icon" className="w-12 sm:w-16 lg:w-20" />
              <div className="text-[#FBC108] flex flex-col justify-center items-center text-center">
                <p className="text-xl font-semibold text-white">Question and Test Papers</p>
                <p className="text-3xl font-bold py-2">30,000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Olympiad;
