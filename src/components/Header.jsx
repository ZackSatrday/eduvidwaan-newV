import React from "react";
import { FaRegUser, FaUserPlus } from "react-icons/fa";
import About from "./About";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="fixed z-10 w-full h-20 bg-[#111827] flex items-center justify-between m-5 rounded-2xl ">
      <h1 className="text-3xl w-36 font-semibold pl-10 font-sora">Edu<span className="text-htext">Vidwan</span></h1>

      <nav className="flex items-center max-md:hidden">
        <ul className="flex items-center gap-4">
          
          <li className={`text-lg font-semibold hover:text-htext trans-200 cursor-pointer`}>
              <Link to='home' smooth={true} duration={100}>Home</Link>
          </li>
          <li className={`text-lg font-semibold hover:text-htext trans-200 cursor-pointer`}>
              <Link to='about' smooth={true} duration={100}>About</Link>
          </li>
          <li className={`text-lg font-semibold hover:text-htext trans-200 cursor-pointer`}>
              <Link to='feature' smooth={true} duration={100}>Feature</Link>
          </li>
          <li className={`text-lg font-semibold hover:text-htext trans-200 cursor-pointer`}>
              <Link to='contact' smooth={true} duration={100}>Contact</Link>
          </li>
         
        </ul>
      </nav>

      <div className="w-48 flex items-center gap-5 pr-12">
        <FaUserPlus size={30} />
        <button className="button-style w-24 h-10 text-xl">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
