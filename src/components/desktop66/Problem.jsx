import React from "react";

const Problem = () => {
  return (
    <div className="font-poppins relative">
      <div className="absolute z-20 ml-5 bg-orange-400 w-fit text-white font-medium p-2 rounded-xl top-0">
        <p>Problem</p>
      </div>
      <div className="relative z-10 top-6 flex flex-col sm:flex-row gap-2 justify-between sm:items-center w-full border-2 px-3 py-4  border-orange-400 rounded-md">
        <div className="text-teal-800 font-medium">
          <p>How to make Poster?</p>
          <p className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <span className="text-xs font-regular">
              Last attempted on 24 March 2020
            </span>
          </p>
          <p>
            Marks : <span className="text-orange-400">400/400 </span>
          </p>
        </div>
        <button className="bg-teal-800 text-white px-3 py-2 h-fit w-fit rounded-xl">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Problem;
