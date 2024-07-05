import Image from "next/image";
import React from "react";

export const Main = () => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-30">
        <div className="text-7xl font-bold text-white">
          Web Title
        </div>
      </div>
      <Image src="/bg.jpg" alt="" fill className="z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[#140124]/20 z-20"></div>
    </div>
  );
};
