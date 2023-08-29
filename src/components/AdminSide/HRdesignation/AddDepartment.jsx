import React from "react";

const AddDepartment = () => {
  return (
    <div className="font-poppins space-y-2">
      <p className="font-medium">Add Department</p>
      <div className="flex justify-between py-1 px-1 border rounded-md shadow-md shadow-gray ">
        <input type="text" name="" id="" placeholder="DEPARTMENT TITLE " className="text-white font-medium ml-3" />
        <button className="bg-teal-800 text-white px-3 py-1 rounded-md">SAVE DESIGNATION</button>
      </div>
    </div>
  );
};

export default AddDepartment;
