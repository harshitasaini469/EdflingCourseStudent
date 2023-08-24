import React from "react";

const CreateAssignment = () => {
  return (
    <div className="flex flex-col h-screen justify-between font-poppins">
      <div className="">
        <div className="text-teal-600 text-2xl md:text-3xl lg:text-5xl font-semibold">
          Create An Assignment
          <div className="w-2/5 bg-black h-0.5 rounded-md mt-3 ml-3"></div>
        </div>
        <div className="bg-teal-800 rounded-md p-3 md:p-4 lg:p-5 flex flex-col justify-center mt-4 space-y-3">
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Write here..."
              class="bg-transparent text-sm sm:text-base md:text-lg lg:text-2xl placeholder-white ml-3 outline-none"
            />
            <div className="h-0.5 bg-white rounded-md"></div>
          </div>
          <div>
            <button className="border rounded-3xl bg-white text-sm sm:text-base lg:text-lg text-teal-800 p-2 lg:px-4 lg:py-2 font-medium">
              Upload Pdf
            </button>
          </div>
        </div>
      </div>
      <div className="p-4  flex flex-col  space-y-3 md:space-y-6 lg:space-y-10">
        <button className="text-teal-800 text-sm sm:text-base md:text-lg lg:text-xl font-semibold  ms-auto ">
          Create Deadline
        </button>
        <button className="text-white bg-teal-800 rounded-3xl px-3 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-medium ms-auto ">
          Add Assignment
        </button>
      </div>
    </div>
  );
};

export default CreateAssignment;
