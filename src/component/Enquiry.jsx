import React from "react";
import girlimg from "../assets/girlimg.svg";
import pencil2 from "../assets/pencil2.svg";
import book2 from "../assets/book2.svg";



const Enquiry = () => {
  return (
    <div className="bg-[#F1F1F1] p-5 md:p-10 ">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        {/* Image Section */}
        <div className="hidden md:flex w-full md:w-[55%] justify-center">
          <img src={girlimg} className="object-cover" alt="Illustration" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-[45%]">
          <div>
            <button className="py-2.5 px-5 bg-[#FBC108] font-bold rounded-md">
              Get in Touch With Us?
            </button>
          </div>

          <div className="py-3">
            <h3 className="text-2xl md:text-3xl font-bold py-3">Call us on our number</h3>
            <p className="font-semibold text-[#FBC108] text-lg">7988315190</p>
          </div>

          <div className="py-3">
            <label htmlFor="name" className="font-bold">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-5 py-2.5 rounded-md border border-gray-300 bg-white my-2 focus:outline-none"
              placeholder="Input your full name"
            />
          </div>

          <div className="py-3">
            <label htmlFor="mail" className="font-bold">Email</label>
            <input
              type="email"
              id="mail"
              className="w-full px-5 py-2.5 rounded-md border border-gray-300 bg-white my-2 focus:outline-none"
              placeholder="Input your Email"
            />
          </div>

          <div className="py-3">
            <label htmlFor="message" className="font-bold">Message</label>
            <textarea
              rows="5"
              id="message"
              className="w-full px-5 py-2.5 rounded-md border border-gray-300 bg-white my-2 focus:outline-none"
              placeholder="Input your message"
            />
          </div>

          <div>
            <button className="px-6 text-white rounded-full shadow-lg hover:bg-[#77a3c9]  cursor-pointer py-2.5 bg-[#072F53]">
              Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Images Hidden on Mobile */}
      <img
        src={pencil2}
        alt=""
        className="hidden md:block absolute top-[40%] right-0"
      />
      <img
        src={book2}
        alt=""
        className="hidden md:block absolute bottom-0 left-0"
      />
    </div>
  );
};

export default Enquiry;
