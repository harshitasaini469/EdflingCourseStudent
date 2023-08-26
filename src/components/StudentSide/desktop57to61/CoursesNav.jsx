import React from "react";

const CoursesNav = () => {
  return (
    <div className="bg-teal-800 p-3 rounded-md text-white font-poppins ">
      <div className="flex flex-col lg:flex-row justify-between text-sm space-y-1 lg:space-y-0">
        <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-1 lg:space-y-0 lg:items-center">
          <span>Ask your Doubt</span>
          <span>Watch Hint Video</span>
          <span>Watch Later</span>
        </div>
        <div className="flex flex-row space-x-3 lg:items-center">
          <span>Download Notes</span>
          <svg
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CoursesNav;
