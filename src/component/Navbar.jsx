import React, { useState } from "react";
import { IoExitOutline, IoSearchOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { MdSearch } from "react-icons/md";
import logo from "../assets/logo.svg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md relative z-10">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>

      <div className="md:hidden">
      <MdSearch size={"24px"}/>
      </div>

      <div className="hidden md:flex bg-gray-100 py-2 px-4 w-[400px] rounded-full items-center relative">
        <IoSearchOutline size={24} className="absolute left-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search here"
          className="pl-12 pr-4 py-2 w-full bg-transparent outline-none"
        />
      </div>


      <ul className="hidden md:flex gap-8">
        {['Home', 'Olympiad', 'CBSE', 'CUET'].map((item) => (
          <li key={item} className="cursor-pointer hover:font-semibold hover:border-b-2 hover:border-amber-400">
            {item}
          </li>
        ))}
      </ul>


      <div className="hidden md:flex items-center">
        <button className="bg-[#FBC108] px-4 py-2 rounded-full mr-2">Login</button>
        <IoExitOutline size={24} />
      </div>


      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={32} /> : <HiOutlineMenuAlt3 size={32} />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-white z-20 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <img src={logo} alt="logo" className="w-32" />
            </div>
            <button onClick={() => setMenuOpen(false)}>
              <HiX size={32} />
            </button>
          </div>

          <ul className="flex flex-col gap-6">
            {['Home', 'Olympiad', 'CBSE', 'CUET'].map((item) => (
              <li key={item} className="text-lg cursor-pointer border-b border-gray-200 pb-2">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button className="bg-[#FBC108] w-full py-3 rounded-full mb-4">Login</button>
            <div className="flex items-center justify-center gap-2">
              <IoExitOutline size={20} />
              <span>Logout</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
