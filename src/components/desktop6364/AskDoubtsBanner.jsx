import React from "react";

const AskDoubtsBanner = () => {
  return (
    <div className=" flex h-44 sm:h-48  md:h-52 lg:h-64  bg-gradient-to-l from-teal-600 to-teal-300 text-white rounded-xl font-poppins ">
      <div className="flex flex-col  sm:w-11/12 md:w-4/5  justify-center ml-5">
      <div className="">
        <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl  font-semibold">Ask Doubts</p>
      </div>
      <div className="w-3/4 sm:w-2/3 md:w-4/6 lg:w-3/4">
        <p className="text-sm md:text-lg lg:text-xl  ">
          Get your doubts instantly resolved via Audio/Video call, chat, or
          screen sharing from our Doubt Solver
        </p>
      </div>
      </div>
      
      <div className="w-44 sm:w-48 lg:w-64 self-end ">
        <img src="./desktop6364/doubts.png" alt="" className="" />
      </div>
    </div>
  );
};

export default AskDoubtsBanner;
