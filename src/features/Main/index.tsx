import { NavBar } from "@/components/NavBar";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export const Main = () => {
  return (
    <div className="w-full min-h-screen relative">
      <NavBar />
      <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center z-30">
        <div className="text-7xl font-bold text-white">Web Title</div>
        <div className="text-base font-light text-white">
          I Will Make It Real For You
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-8">
          <div className="flex md:gap-x-8 gap-x-4">
            <FontAwesomeIcon icon={faFacebook} className="text-white w-5 h-5" />
            <FontAwesomeIcon icon={faInstagram} className="text-white w-5 h-5" />
            <FontAwesomeIcon icon={faXTwitter} className="text-white w-5 h-5" />
            <FontAwesomeIcon icon={faDiscord} className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
      <Image src="/bg.jpg" alt="" fill className="z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[#140124]/20 z-20"></div>
    </div>
  );
};
