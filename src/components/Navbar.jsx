import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [show, setShow] = useState(true)
  let lastScroll = 0

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  const toggleNav = () => {
    navOpen ? document.body.style.overflow = "scroll" : document.body.style.overflow = "hidden"
    navOpen ? document.getElementById("app").classList.remove("blur-sm") : document.getElementById("app").classList.add("blur-sm")
    setNavOpen(!navOpen);
  };

  const controlNavbar = () => {
    console.log('scrollY',window.scrollY);
    console.log('last',lastScroll);
    if ((window.scrollY < lastScroll || window.scrollY < 10)) {
      setShow(true)
      console.log(true);
    } else {
      setShow(false)
      console.log(false);
    }
    lastScroll = window.scrollY
  }


  return (
    <div className={`${show ? '' : "top-[-20%] duration-500 ease-in-out"} text-white justify-between items-center px-4 h-20 max-w-[1240px] mx-auto fixed top-0 left-0 right-0 z-10 duration-500 ease-in-out flex backdrop-blur-md shadow-sm`}>
      <div className="bg-black absolute top-0 right-0 left-0 bottom-0 z-0 opacity-25"/>
      <h1 className="text-[#00df9a] font-bold w-full text-3xl z-10">APP</h1>
      <ul className="hidden md:flex z-10">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={toggleNav} className='block md:hidden z-20 cursor-pointer'>
        {navOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
      </div>
      <div
        className={
          `fixed right-0 top-0 p-4 pt-8 bg-slate-500 w-[350px] h-full border-r border-r-gray-900 duration-300 ease-in-out z-10 flex flex-col justify-center items-center ${navOpen ? '' : "fixed right-[-100%] ease-out duration-300"}`
        }>

        <ul className="pt-10 text-gray-300 text-lg">
          <li className="pb-4">Home</li>
          <li className="pb-4 pt-4 ">Company</li>
          <li className="pb-4 pt-4">Resources</li>
          <li className="pb-4 pt-4 ">About</li>
          <li className="pb-4 pt-4 ">Contact</li>
        </ul>
      </div>
    </div>
  )
}
