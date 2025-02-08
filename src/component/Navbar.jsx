import React from "react";
import { IoExitOutline, IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 z-20 py-4 h-20 bg-white ">
      <div>
        <img src="src/assets/logo.svg" alt="logo" />
      </div >
      <div className="bg-[#F1F1F1] py-2.5 relative pl-12 px-5 w-[500px] shadow-xl rounded-full " >
        <input type="text" placeholder="Search here" className="outline-none"/>
        <IoSearchOutline size={"24px"} className="absolute top-3 left-4"/>
      </div>
      <div className="bg-[#F1F1F1] px-10 py-2.5 rounded-full">
        <ul className="flex justify-between gap-8 ">
          <li className="hover:font-semibold hover:border-b-2 hover:border-amber-40 cursor-pointer">Home</li>
          <li className="hover:font-semibold hover:border-b-2 hover:border-amber-400 cursor-pointer">Olympiad</li>
          <li className="hover:font-semibold hover:border-b-2 hover:border-amber-400 cursor-pointer">CBSE</li>
          <li className="hover:font-semibold hover:border-b-2 hover:border-amber-400 cursor-pointer">CUET</li>
        </ul>
      </div>
      <div className="py-1 relative">
        <button className="px-1 py-1  w-24 bg-[#FBC108] rounded-full ">Login </button>
        <IoExitOutline className="absolute right-1 top-3" size={"20px"} />
      </div>
    </nav>
  );
};

export default Navbar;
