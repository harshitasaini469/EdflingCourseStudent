import React, { useState } from "react";

const QuizQuesComponent = (props) => {
  const [numOptions, setNumOptions] = useState(2); // Default to 2 options
  const [options, setOptions] = useState(Array(numOptions).fill(""));
  const [que,setQue]=useState('')

  const handleNumOptionsChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setNumOptions(value);
    setOptions(Array(value).fill(""));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };


  return (
    <div className="p-3 mb-4">
      <div className="flex items-center space-x-2">
        <p>
          Q.{props.queNo}
        </p>
        <div className="w-full">
            <input type="text" className="w-full outline-none" onChange={(e)=>setQue(e.target.value)} />
            <div className="border-1 border-black border-dashed"></div>
        </div>
      </div>
      <div className="mt-2 border-1 border-teal-800 rounded-xl w-fit p-2">
        <label className="mr-2">No. of options:</label>
        <select
          className="px-2 py-1 outline-none"
          value={numOptions}
          onChange={handleNumOptionsChange}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap justify-between">
        {options.map((option, index) => (
          <div key={index} className="mt-2 sm:w-1/2 pr-2">
            <div className=" border-1 w-44 border-teal-800 rounded-xl flex items-center px-3 py-1">
              {String.fromCharCode(65 + index)}. {/* Convert index to alphabet */}
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="w-full outline-none ml-1"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuesComponent;
