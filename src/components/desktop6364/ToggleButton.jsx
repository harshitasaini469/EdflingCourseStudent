import React, { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="font-poppins w-fit">
      <div className="flex border border-2 border-teal-900 rounded-md">
        <button
          className={`focus:outline-none py-2 px-4 rounded text-sm md:text-base ${
            isActive ? "bg-teal-900 text-white" : "bg-white text-green-800"
          }`}
          onClick={handleClick}
        >
          Unsolved
        </button>
        <button
          className={`focus:outline-none py-2 px-4 rounded text-sm md:text-base  ${
            isActive ? "bg-white text-green-800" : "bg-teal-900 text-white"
          }`}
          onClick={handleClick}
        >
          Solved
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
