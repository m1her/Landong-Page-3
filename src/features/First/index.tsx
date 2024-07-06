import React from "react";

export const First = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-x-4 min-h-screen bg-white lg:px-32 sm:px-20 py-8 px-12">
      <div className="relative w-full aspect-square">
        <div className="aspect-square w-2/3 bg-gray-200 rounded-sm"></div>
        <div className="aspect-square w-2/3 absolute bottom-0 right-0 bg-gray-200 rounded-sm"></div>
      </div>
      <div className="relative w-full aspect-square">
        <div className="aspect-square w-2/3 bg-gray-200 rounded-sm"></div>
        <div className="aspect-square w-2/3 absolute bottom-0 right-0 bg-gray-200 rounded-sm"></div>
      </div>
      <div className="relative w-full aspect-square">
        <div className="aspect-square w-2/3 bg-gray-200 rounded-sm"></div>
        <div className="aspect-square w-2/3 absolute bottom-0 right-0 bg-gray-200 rounded-sm"></div>
      </div>
    </div>
  );
};
