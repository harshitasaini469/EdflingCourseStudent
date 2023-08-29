import React, { useState } from "react";

const TextInput = ({type, field,placeholder, required }) => {
    const [input,setInput]=useState('')
  return (
    <div className="flex flex-col relative font-poppins">
      <label htmlFor={field} className="absolute z-20 top-0 bg-white px-1 text-sm ml-4 ">{field}</label>
      {required ? (
        <input type={type} className="relative z-10 top-3 border-1 border-black px-3 py-2 text-sm  rounded-md" name={field} id={field} placeholder={placeholder} required value={input} onChange={(e)=>setInput(e.target.value)} />
      ) : (
        <input type={type} name={field} id={field} placeholder={field} value={input} onChange={(e)=>setInput(e.target.value)} />
      )}
    </div>
  );
};

export default TextInput;
