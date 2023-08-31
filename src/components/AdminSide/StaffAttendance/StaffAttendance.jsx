import React from "react";
import SelectCriteria from "./SelectCriteria";
import StaffAttendanceList from "./StaffAttendanceLIst";
import staffAttendanceData from "./staffAttendanceData";
import Pagination from "./Pagination";

const StaffAttendance = () => {
  return (
    <div className="font-poppins">
      <div className="rounded-md p-2 bg-gradient-to-r from-teal-600 to-teal-100 font-medium w-fit">
        <p className="font-medium text-sm sm:text-base">Staff Attendance</p>
      </div>
      <SelectCriteria />
      <div className="mt-5">
        <p className="font-medium text-gray-500 mb-3">Staff Attendance</p>
        <Pagination />
      </div>
    </div>
  );
};

export default StaffAttendance;
