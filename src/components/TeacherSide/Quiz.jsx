import React from "react";

const Quiz = () => {
  const quizes = [
    {
      unsubmitted: 40,
      totalSubmission: 50,
      deadline: "_ _July 2023",
      totalQue: 50,
    },
    {
      unsubmitted: 40,
      totalSubmission: 50,
      deadline: "_ _July 2023",
      totalQue: 50,
    },
    {
      unsubmitted: 40,
      totalSubmission: 50,
      deadline: "_ _July 2023",
      totalQue: 50,
    },
  ];
  return (
    <div className="flex flex-col h-screen justify-between font-poppins sm:p-3">
      <div className="">
        <div className="flex flex-col">
          <p className="text-teal-600 text-2xl md:text-3xl lg:text-5xl font-semibold">Quiz</p>
          <div className="w-2/5 bg-black h-0.5 rounded-md mt-2 "></div>
        </div>
        <div className="space-y-8 mt-2 sm:p-4 mb-4">
          {quizes.map((quiz,index) => {
            return (
              <div className="bg-teal-800 p-2 sm:py-4 sm:px-4 rounded-md flex flex-col space-y-3 justify-center sm:space-y-5 text-lg">
                <div className="text-white flex justify-between items-center ">
                  <div className="w-fullsm:flex space-x-2 w-full">
                  <p className="text-xs sm:text-sm md:text-base whitespace-nowrap  ">
                    Quiz -{index+1} :
                  </p>
                  <div className=' border-1 border-dashed border-white h-0.5 w-full mt-3 '></div>

                  </div>
                  
                  <button>
                    <svg
                   className="w-4 h-4 md:w-6 md:h-6"
                      viewBox="0 0 11 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="5.59872"
                        cy="5"
                        rx="5.05184"
                        ry="5"
                        fill="white"
                      />
                      <ellipse
                        cx="5.59872"
                        cy="17"
                        rx="5.05184"
                        ry="5"
                        fill="white"
                      />
                      <ellipse
                        cx="5.59872"
                        cy="29"
                        rx="5.05184"
                        ry="5"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <div className="sm:flex space-y-2 sm:space-y-0 justify-between">
                  <p className="text-red-300 text-xs sm:text-sm md:text-base whitespace-nowrap ">
                    Deadline - <span>{quiz.deadline}</span>
                  </p>
                  <p className="text-white text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Total Questions - <span>{quiz.totalQue}</span>
                  </p>
                </div>
                <div className="text-white sm:flex space-y-2 sm:space-y-0 justify-between text-xs sm:text-sm md:text-base whitespace-nowrap">
                  <p>
                    Unsubmitted by -{" "}
                    <span className="text-red-300">{quiz.unsubmitted}</span>
                  </p>
                  <p className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Total Submissions -{" "}
                    <span className="text-sky-200">{quiz.totalSubmission}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
