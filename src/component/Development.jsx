import React from "react";

const Development = () => {
  return (
    <div className="h-[65vh] flex px-15  gap-6 relative">
      <div className="w-[45%]">
        <img
          src="src/assets/employee.jpg"
          alt="Employee"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className=" w-[55%] rounded-xl absolute h-auto right-16 top-15 py-5 shadow-xl bg-white">
        <div className="h-auto md:h-[40vh]   px-6 md:px-10">
          <button className="px-5 py-2.5 bg-[#FBC108] rounded-md hover:bg-red-700">
            Top Categories
          </button>
          <div className="relative py-4">
            <h2 className="text-xl md:text-3xl font-semibold text-center md:text-left">
              Career Development
            </h2>
          </div>
          <p className="text-xl md:text-base text-center md:text-left py-3 pr-9 ">
            Not all changes in an organisation are welcome and even the best
            ones are not always easy. This is why many employers put a high
            value on executives able to lead well under pressure.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="px-7 py-2.5 bg-[#FBC108] text-white rounded-full ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
