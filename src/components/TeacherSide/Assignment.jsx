import React from "react";

const Assignment = () => {
  const assignments = [
    {
      unsubmitted: 40,
      totalSubmission: 50,
      deadline: "_ _July 2023",
    },
    {
      unsubmitted: 40,
      totalSubmission: 50,
      deadline: "_ _July 2023",
    },
    {
      unsubmitted: 40,
      totalSubmission: 50,
      deadline: "_ _July 2023",
    },
  ];
  return (
    <div className="flex flex-col h-screen justify-between font-poppins p-3">
      <div className="">
        <div className="flex flex-col">
          <p className="text-teal-600 text-2xl md:text-3xl lg:text-5xl font-semibold">
            Assignment
          </p>
          <div className="w-3/5 lg:w-2/5 bg-black h-0.5 rounded-md mt-2 "></div>
          <button className="ms-auto font-semibold mt-3 text-xs sm:text-sm ">
            Create a new Assignment +
          </button>
        </div>
        <div className="space-y-8 mt-2 p-4 mb-4">
          {assignments.map((assignment, index) => {
            return (
              <div className="bg-teal-800 py-4 px-4 rounded-md flex flex-col space-y-3 justify-center sm:space-y-5 text-lg">
                <div className="text-white sm:flex space-y-5 space-x-2 items-center">
                  <p className="text-xs sm:text-sm md:text-base whitespace-nowrap  ">
                    {" "}
                    Assignment-{index + 1} :
                  </p>
                  <div className=" border-1 border-dashed border-white h-0.5 w-full "></div>
                </div>
                <div className="text-white sm:flex items-center sm:space-y-0 space-y-3 justify-between">
                  <p className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Unsubmitted by -{" "}
                    <span className="text-red-300 text-xs sm:text-sm md:text-base">
                      {assignment.unsubmitted}
                    </span>
                  </p>
                  <p className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Total Submissions -{" "}
                    <span className="text-sky-200 text-xs sm:text-sm md:text-base">
                      {assignment.totalSubmission}
                    </span>
                  </p>
                </div>
                <div className="flex sm:justify-end text-red-300 text-xs sm:text-sm md:text-base">
                  Deadline - {assignment.deadline}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Assignment;
