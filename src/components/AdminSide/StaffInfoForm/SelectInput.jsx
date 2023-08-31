import React, { useState } from 'react';

const SelectInput = ({ label, options}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };
   
  return (
    <div className="flex flex-col relative font-poppins">
      <label className="absolute z-20 top-0 bg-white px-1 text-sm ml-4 ">
        {label}
      </label>
      <select
        className="relative z-10 top-3 border-1 border-black px-3 py-2 text-sm  rounded-md "
        onChange={handleSelectChange}
        value={selectedOption} 
      >
        <option >{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
