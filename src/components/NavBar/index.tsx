"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faInfoCircle,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export const NavBar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="z-40 sm:flex md:py-12 sm:py-8 lg:px-32 sm:px-20 py-8 px-12 justify-between items-center relative">
      <div
        className="sm:hidden text-2xl font-light text-white flex gap-x-3 items-center cursor-pointer w-fit"
        onClick={() => setMenu((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faBars} className="sm:hidden block w-4 z-50" />
        <span className="z-50 select-none">Logo</span>
      </div>
      <div className="sm:block hidden text-2xl font-light text-white cursor-pointer w-fit">
        <span className="z-50 select-none">Logo</span>
      </div>
      <div className="sm:flex items-center md:gap-x-12 gap-x-4 hidden">
        <div className="font-light text-white cursor-pointer">Home</div>
        <div className="font-light text-white/70 hover:text-white transition-colors cursor-pointer">
          Profile
        </div>
        <div className="font-light text-white/70 hover:text-white transition-colors cursor-pointer">
          About Us
        </div>
        <div className="font-light text-white/70 hover:text-white transition-colors cursor-pointer">
          Contacts
        </div>
        <div className="text-white whitespace-nowrap text-sm font-light border border-white rounded-full px-3 py-1.5 bg-purple-400/40 hover:bg-purple-500/50 hover:to-purple-200 transition-all duration-300 cursor-pointer">
          Sign Up
        </div>
      </div>
      <div
        className={`bg-black/20 backdrop-blur bg-blend-saturation h-screen sm:hidden absolute top-0 left-0 flex flex-col gap-4 z-10
        ${menu ? "w-full" : "w-0"} overflow-hidden transition-all duration-500
        `}
      >
        <div className="font-light text-white mt-24 ml-12 w-full cursor-pointer">
          Home
        </div>
        <div className="font-light text-white/70 w-full ml-12 cursor-pointer">
          Profile
        </div>
        <div className="font-light whitespace-nowrap text-white/70 w-full ml-12 cursor-pointer">
          About Us
        </div>
        <div className="font-light text-white/70 w-full ml-12 cursor-pointer">
          Contacts
        </div>
        <div className="text-white whitespace-nowrap text-sm font-light border border-white rounded-full ml-12 w-fit px-3 py-1.5 bg-purple-400/40 hover:bg-purple-500/50 hover:to-purple-200 transition-all duration-300 cursor-pointer">
          Sign Up
        </div>
      </div>
    </nav>
  );
};
