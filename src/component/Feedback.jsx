import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import student1 from "../assets/student1.svg";
import student2 from "../assets/student2.svg";
import student3 from "../assets/student3.svg";
import more from "../assets/more.svg";

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
            <img src={student1} alt="" />
          </div>
          <div>
            <img src={student2} alt="" />
          </div>
          <div>
            <img src={student3} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={more} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
