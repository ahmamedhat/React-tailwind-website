import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="flex text-white justify-between items-center px-4 h-24 max-w-[1240px] mx-auto">
      <h1 className="text-[#00df9a] font-bold w-full text-3xl">APP</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={toggleNav} className = 'block md:hidden'>
        {navOpen ? <AiOutlineClose size={20} /> : <HiMenuAlt3 size={20} />}
      </div>
      <div
        className={
          navOpen
            ? "fixed left-0 top-0 p-4 pt-8 bg-black w-[60%] border-r border-r-gray-900 duration-500 ease-in-out"
            : "fixed left-[-100%] ease-out duration-400"
        }
      >
        <h1 className="text-[#00df9a] font-bold w-full text-3xl">APP</h1>

        <ul className="pt-10">
          <li className="pb-4 border-b border-b-gray-600">Home</li>
          <li className="pb-4 pt-4  border-b border-b-gray-600">Company</li>
          <li className="pb-4 pt-4 border-b border-b-gray-600">Resources</li>
          <li className="pb-4 pt-4  border-b border-b-gray-600">About</li>
          <li className="pb-4 pt-4 ">Contact</li>
        </ul>
      </div>
    </div>
  );
}
