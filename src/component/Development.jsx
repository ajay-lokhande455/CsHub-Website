import React from "react";

const Development = () => {
  return (
    <div className="flex flex-col md:flex-row px-5 md:px-15 gap-6 relative h-auto md:h-[65vh]">
      <div className="w-full md:w-[45%]">
        <img
          src="src/assets/employee.jpg"
          alt="Employee"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="w-full md:w-[55%] rounded-xl h-auto md:absolute md:right-16 md:top-15  py-5 shadow-xl bg-white">
        <div className="h-auto md:h-[40vh] px-6 md:px-10">
          <button className="px-5 py-2.5 bg-[#FBC108] rounded-md hover:bg-red-700">
            Top Categories
          </button>
          <div className="relative py-4">
            <h2 className="text-xl md:text-3xl font-semibold md:text-left">
              Career Development
            </h2>
          </div>
          <p className="text-xl md:text-base  md:text-left py-3 pr-9">
            Not all changes in an organisation are welcome and even the best
            ones are not always easy. This is why many employers put a high
            value on executives able to lead well under pressure.
          </p>
          <div className="flex md:justify-start">
            <button className="px-7 py-2.5 bg-[#FBC108] text-white rounded-full">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
