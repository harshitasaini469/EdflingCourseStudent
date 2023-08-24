import React, { useState } from "react";
import QuizQuesComponent from "./QuizQuesComponent";

const CreateQuiz = () => {
  const [selectedOption, setSelectedOption] = useState("No. of Questions");
  const [isOpen, setIsOpen] = useState(false);
  const [numQuestions, setNumQuestions] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setNumQuestions(parseInt(option)); // Convert the selected option to an integer
  };

  // Create an array to generate the required number of QuizQuesComponent
  const quizQuestions = Array.from({ length: numQuestions }, (_, index) => (
    <QuizQuesComponent key={index} queNo={index+1} />
  ));

  return (
    <div className="font-poppins p-3">
      <div className="text-teal-600 text-2xl md:text-3xl lg:text-5xl font-semibold">
        Create Quiz
        <div className="w-2/5 bg-black h-0.5 rounded-md mt-2"></div>
      </div>
      <div className="mt-4 " >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 text-gray-700 bg-white font-semibold flex items-center"
        >
          {selectedOption}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z"
              fill="black"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="bg-white border w-1/6  rounded -mt-1">
            <button
              onClick={() => handleOptionClick("1")}
              className="block px-4 w-full py-2  text-gray-700 hover:bg-gray-200"
            >
              1
            </button>
            <button
              onClick={() => handleOptionClick("2")}
              className="block w-full  px-4 py-2  text-gray-700 hover:bg-gray-200"
            >
              2
            </button>
            <button
              onClick={() => handleOptionClick("3")}
              className="block w-full  px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              3
            </button>
          </div>
        )}
      </div>
      <div className="mt-3">
        {/* Render the QuizQuesComponent based on the selected number of questions */}
        {quizQuestions}
      </div>
      <div className=" flex flex-col self-end space-y-6 mt-5 p-5 text-lg ">
        <button className="text-teal-800 text-base md:text-lg lg:text-xl font-semibold  ms-auto ">Create Deadline</button>
        <button className="bg-teal-800 text-white text-base md:text-lg lg:text-xl font-medium ms-auto px-3 py-2 rounded-3xl">Add Quiz</button>
      </div>
    </div>
  );
};

export default CreateQuiz;
