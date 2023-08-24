import React, { useEffect, useState } from "react";
import LogoutModal from "./LogOutModal";

const Logout = () => {
  const [isModalOpen, setModalOpen] = useState(true); // Set initial state to true to open the modal
  
  return (
    <div className="font-poppins">
      <div className="bg-teal-800 p-3  rounded-md text-white ">
        <div className="flex flex-col sm:flex-row space-y-3  sm:space-y-0 justify-center sm:justify-between items-center">
          <div className="flex space-x-5 items-center">
            <div className="rounded-full w-fit h-fit p-2 bg-teal-100 ">
              <svg
                className="w-7 h-7"
                viewBox="0 0 40 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.0869 30.875H8.33691V13H31.0869M26.2119 1.625V4.875H13.2119V1.625H9.96191V4.875H8.33691C6.53316 4.875 5.08691 6.32125 5.08691 8.125V30.875C5.08691 31.737 5.42932 32.5636 6.03882 33.1731C6.64831 33.7826 7.47496 34.125 8.33691 34.125H31.0869C31.9489 34.125 32.7755 33.7826 33.385 33.1731C33.9945 32.5636 34.3369 31.737 34.3369 30.875V8.125C34.3369 7.26305 33.9945 6.4364 33.385 5.8269C32.7755 5.21741 31.9489 4.875 31.0869 4.875H29.4619V1.625M27.8369 19.5H19.7119V27.625H27.8369V19.5Z"
                  fill="#215D4F"
                />
              </svg>
            </div>
            <div className="flex items-center space-x-5">
              <p className="font-semibold text-2xl sm:text-3xl lg:text-5xl">12</p>
              <div>
                <p className="text-lg sm:text-2xl lg:text-3xl whitespace-nowrap ">Upcoming Class</p>
                <p className="text-base sm:text-base lg:text-xl">This Week</p>
              </div>
            </div>
          </div>

          <div>
            <button className="text-teal-800 bg-white rounded-xl px-3 py-2 text-sm sm:text-base lg:text-lg">
              See Schedules
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 text-white flex flex-wrap items-center justify-center gap-5">
        <div className="bg-teal-800 p-4 rounded-md space-y-3 text-lg w-fit flex flex-col ">
          <p>Tutoring Hours</p>
          <div className="flex">
            <p>214</p>
            <p className="flex items-center self-start">
              <svg
                width="11"
                height="5"
                viewBox="0 0 11 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.211914 5L5.21191 0L10.2119 5H0.211914Z"
                  fill="url(#paint0_linear_2156_451)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2156_451"
                    x1="5.21191"
                    y1="0"
                    x2="5.21191"
                    y2="5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FFCA" />
                    <stop offset="1" stop-color="#45776B" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-teal-400 text-xs">3.15%</span>
            </p>
          </div>
          <p>In August 2023</p>
        </div>
        <div className="bg-teal-800 p-4 rounded-md space-y-3 text-lg w-fit">
          <p>Tutoring Hours</p>
          <div className="flex">
            <p>214</p>
            <p className="flex items-center self-start">
              <svg
                width="11"
                height="5"
                viewBox="0 0 11 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.211914 5L5.21191 0L10.2119 5H0.211914Z"
                  fill="url(#paint0_linear_2156_451)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2156_451"
                    x1="5.21191"
                    y1="0"
                    x2="5.21191"
                    y2="5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FFCA" />
                    <stop offset="1" stop-color="#45776B" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-teal-400 text-xs">3.15%</span>
            </p>
          </div>
          <p>In August 2023</p>
        </div>
        <div className="bg-teal-800 p-4 rounded-md space-y-3 text-lg w-fit">
          <p>Tutoring Hours</p>
          <div className="flex">
            <p>214</p>
            <p className="flex items-center self-start">
              <svg
                width="11"
                height="5"
                viewBox="0 0 11 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.211914 5L5.21191 0L10.2119 5H0.211914Z"
                  fill="url(#paint0_linear_2156_451)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2156_451"
                    x1="5.21191"
                    y1="0"
                    x2="5.21191"
                    y2="5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FFCA" />
                    <stop offset="1" stop-color="#45776B" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-teal-400 text-xs">3.15%</span>
            </p>
          </div>
          <p>In August 2023</p>
        </div>
      </div>
      <div className="space-y-5">
        <div className="flex flex-wrap gap-2 justify-between mt-5 text-sm sm:text-base lg:text-xl">
            <p className="font-bold">
                Performance Stat
            </p>
            <div className="space-x-4">
                <button className="b rounded-xl px-3 py-1 text-teal-800">Week</button>
                <button className="bg-teal-800 rounded-xl px-3 py-1 text-white">Months</button>
                <button className=" rounded-xl px-3 py-1 text-teal-800">Year</button>
            </div>
           
        </div>
        <div>
                <img src="/TeacherSide/stats.png" alt="" />
            </div>
      </div>
     
      <div>
        <LogoutModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
      </div>
    </div>
  );
};

export default Logout;
