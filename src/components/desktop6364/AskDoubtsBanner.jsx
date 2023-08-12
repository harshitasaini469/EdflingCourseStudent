import React from "react";

const AskDoubtsBanner = () => {
  return (
    <div className="relative h-44 sm:h-48  md:h-52 lg:h-64 px-4 bg-gradient-to-l from-teal-600 to-teal-300 text-white rounded-xl font-poppins flex flex-col justify-center ">
      <div className=" lg:mb-2">
        <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl  font-semibold">Ask Doubts</p>
      </div>
      <div className="w-3/4 sm:w-2/3 md:w-4/6 lg:w-3/4">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl  ">
          Get your doubts instantly resolved via Audio/Video call, chat, or
          screen sharing from our Doubt Solver
        </p>
      </div>
      <div className="absolute right-0 bottom-0 w-32 sm:w-36 md:w-48 lg:w-60">
        <img src="./desktop6364/doubts.png" alt="" className="" />
      </div>
    </div>
  );
};

export default AskDoubtsBanner;
