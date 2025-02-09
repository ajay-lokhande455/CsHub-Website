import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Feedback = () => {
  return (
    <div className=" md:block hidden p-15">
      <div className="h-full ">
        <div className="flex justify-between text-3xl font-bold p-2">
          <IoIosArrowBack />
          <h2>What Our Students Say</h2>
          <IoIosArrowForward />
        </div>

        <div className="grid  grid-cols-3 gap-10 py-5">
          <div>
            <img src="/assets/student1.svg" alt="" />
          </div>
          <div>
            <img src="/assets/student2.svg" alt="" />
          </div>
          <div>
            <img src="/assets/student3.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src="/assets/more.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
