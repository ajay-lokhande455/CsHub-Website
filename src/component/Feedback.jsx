import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Feedback = () => {
  return (
    <div className="h-[100vh] border p-15">
      <div className="h-full border">
        <div className="flex justify-between text-3xl font-bold p-2">
          <IoIosArrowBack />
          <h2>What Our Students Say</h2>
          <IoIosArrowForward />
        </div>

        <div className="grid grid-cols-3 py-5">
            <div className="boder relative">
                <img src="src/assets/bgbox.svg" alt="" />
                <img src="src/assets/bgbox1.svg" alt="" className="absolute top-3 left-8"/>
            </div>
            <div className="boder">
                <img src="src/assets/bgbox.svg" alt="" />
            </div>
            <div className="boder">
                <img src="src/assets/bgbox.svg" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
