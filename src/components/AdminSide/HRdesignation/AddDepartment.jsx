import React from "react";

const AddDepartment = () => {
  return (
    <div className="font-poppins space-y-2">
      <p className="font-medium">Add Department</p>
      <div className="flex  justify-between  py-1 px-1 border rounded-md shadow-md shadow-gray ">
        <input type="text" name="" id="" placeholder="DEPARTMENT TITLE " className="text-white font-medium ml-3 text-xs sm:text-base outline-none" />
        <button className="bg-teal-800 text-xs sm:text-base text-white px-1 sm:px-3 py-1 rounded-md w-fit whitespace-nowrap">SAVE DESIGNATION</button>
      </div>
    </div>
  );
};

export default AddDepartment;
