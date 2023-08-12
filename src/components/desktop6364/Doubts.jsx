import React from "react";
import doubtsData from "./doubtsData";

const Doubts = () => {
  return (
    <div className="font-poppins ">
      {doubtsData.map((doubt) => (
        <div
          key={doubt.id}
          className="border rounded-lg border-2 border-gray-400 h-20 sm:h-20 md:h-24 flex flex-col md:flex-row justify-center md:justify-between md:items-center mb-4"
        >
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-600 ms-3">
            <p>{doubt.question}</p>
          </div>
          <div>
            <a
              href={doubt.link}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-teal-900 underline me-3 ms-3 md:ms-0   "
            >
              View Doubt
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doubts;
