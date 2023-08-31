import React from "react";
import SelectCriteria from "./SelectCriteria";
import FileOperations from "../HRdesignation/FileOperations";
import StaffDirectoryList from "./StaffDirectoryList";
import StaffData from "./StaffData";
const StaffDirectory = () => {

  return (
    <div className="">
      <button className="rounded-md p-2 bg-gradient-to-r text-sm sm:text-base from-teal-600 to-teal-100 font-medium">
        Staff Directory
      </button>
      <SelectCriteria />
      <div className="flex items-center justify-between mt-5 font-poppins text-lg">
        <div className="flex items-center gap-1">
          <svg
            className="w-5 h-5 sm:w-7 sm:h-7"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M6.9873 6.80957H19.3623M6.9873 11.6221H19.3623M6.9873 16.4346H19.3623"
                stroke="black"
                stroke-width="2.0625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5498 7.49707C3.9295 7.49707 4.2373 7.18927 4.2373 6.80957C4.2373 6.42987 3.9295 6.12207 3.5498 6.12207C3.17011 6.12207 2.8623 6.42987 2.8623 6.80957C2.8623 7.18927 3.17011 7.49707 3.5498 7.49707Z"
                stroke="black"
                stroke-width="1.375"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5498 12.3096C3.9295 12.3096 4.2373 12.0018 4.2373 11.6221C4.2373 11.2424 3.9295 10.9346 3.5498 10.9346C3.17011 10.9346 2.8623 11.2424 2.8623 11.6221C2.8623 12.0018 3.17011 12.3096 3.5498 12.3096Z"
                stroke="black"
                stroke-width="1.375"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5498 17.1221C3.9295 17.1221 4.2373 16.8143 4.2373 16.4346C4.2373 16.0549 3.9295 15.7471 3.5498 15.7471C3.17011 15.7471 2.8623 16.0549 2.8623 16.4346C2.8623 16.8143 3.17011 17.1221 3.5498 17.1221Z"
                stroke="black"
                stroke-width="1.375"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>

          <span className="text-gray-500 text-sm sm:text-base">List</span>
        </div>
        <FileOperations />
      </div>
      <div className="mt-5">
      <StaffDirectoryList staffData={StaffData} />

      </div>
    </div>
  );
};

export default StaffDirectory;
