import React from "react";
import ContactForm from "./ContactForm";

const StillUnsure = () => {
  return (
    <div className="container border rounded-2xl mt-4 bg-teal-800 font-poppins lg:px-5 w-10/12">
    <div className="flex flex-col md:flex-row justify-center items-center gap-3 p-4 sm:p-6  h-full">
      <div className="flex flex-col text-white space-y-3">
        <div className="">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Still Unsure about the course?</h1>
        </div>
        <div className="">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Get a free counselling session from our Experts</p>
        </div>
        <div className="flex flex-row gap-2 sm:gap-3 items-center">
          <img src="./desktop20/phone.png" alt="" className="w-10 sm:w-12 md:w-14 lg:w-16" />
          <p className="text-base sm:text-xl lg:text-3xl">+91 8989899899</p>
        </div>
      </div>
  
      <div className="w-full  sm:w-3/4    h-auto mt-4 sm:mt-0">
        <ContactForm />
      </div>
    </div>
  </div>
  


  );
};

export default StillUnsure;
