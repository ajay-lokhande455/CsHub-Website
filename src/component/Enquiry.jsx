import React from "react";

const Enquiry = () => {
  return (
    <div className=" bg-[#F1F1F1] p-15 ">
      <div className=" h-full flex gap-10">
        <div className=" w-[55%] h-full flex justify-center ">
          <img src="src/assets/girlimg.svg" className=" object-cover" />
        </div>
        <div className="w-[45%] ">
          <div>
            <button className="py-2.5 px-5 bg-[#FBC108] font-bold rounded-md">
              Get in Touch With Us?
            </button>
          </div>
          <div className="py-3">
            <h3 className="text-3xl font-bold py-3">Call us on our number</h3>
            <p className="font-semibold text-[#FBC108] text-lg">7988315190</p>
          </div>
          <div className="py-3">
            <label htmlFor="name" className="font-bold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-5 py-2.5 rounded-md border border-gray-300 bg-white my-2 focus:outline-none"
              placeholder="Input your full name"
            />
          </div>
          <div className="py-3">
            <label htmlFor="mail" className="font-bold">
              Email
            </label>
            <input
              type="text"
              id="mail"
              className="w-full px-5 py-2.5 rounded-md border border-gray-300  bg-white my-2 focus:outline-none"
              placeholder="Input your Email"
            />
          </div>
          <div className="py-3">
            <label htmlFor="message" className="font-bold">
              Full Name
            </label>
            <textarea
              rows="5"
              type="text"
              id="message"
              className="w-full px-5 py-2.5 rounded-md border border-gray-300  bg-white my-2 focus:outline-none"
              placeholder="Inpute your message"
            />
          </div>
          <div>
            <button className="px-6 text-white rounded-full py-2.5 bg-[#072F53]">
                Enquiry
            </button>
          </div>
        </div>
      </div>
      <img src="src/assets/pencil2.svg" alt="" className="absolute top-[40%] right-0"/>
      <img src="src/assets/book2.svg" className="absolute bottom-0 left-0" />
    </div>
  );
};

export default Enquiry;
