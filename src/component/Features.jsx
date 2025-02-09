import React from "react";

const Features = () => {
  return (
    <div className="py-10 relative">

      <div className="flex flex-col justify-center items-center text-center relative">
        <h2 className="text-3xl font-bold p-8">Features</h2>
        <img src="src/assets/line3.svg" className="absolute w-32 top-16" alt="Line" />
        <h1 className="text-lg max-w-2xl">
          We invest in personnel, technological innovations and infrastructure and have established
          regional and international offices.
        </h1>
      </div>

      <div className="flex flex-col md:flex-row p-5 md:p-15 gap-5 items-center">

        <div className="w-full md:w-[50%] space-y-4">
          <div className="p-4 rounded-xl shadow-lg bg-[#F9F9F9]">
            <div className="flex items-center gap-4">
              <img src="src/assets/cap.svg" alt="Cap" />
              <h3 className="text-2xl">Study Material</h3>
            </div>
            <p className="py-2">
              Get ready to learn with our easy-to-understand study materials. We have everything you need
              for Olympiads, CBSE, ICSE, UGC NET, and more. Our materials will help you understand important
              ideas and improve your skills.
            </p>
          </div>

          <div className="opacity-50 space-y-3">
            {["Question Bank", "Test Series", "Previous Solved Papers", "Leaderboard"].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-2">
                <img src="src/assets/cap.svg" alt={item} />
                <h3 className="text-2xl">{item}</h3>
              </div>
            ))}
          </div>
        </div>


        <div className="w-full md:w-[50%] px-5 md:px-10 py-9 bg-[#FBFBFB] border border-gray-200 rounded-lg flex justify-center">
          <img src="src/assets/material.svg" alt="Study Material" className="w-full h-auto object-contain" />
        </div>
      </div>

   
      <img src="src/assets/hand.svg" className="absolute md:block hidden bottom-[-19px] z-[-222] w-32 md:w-auto" alt="Hand" />

    </div>
  );
};

export default Features;
