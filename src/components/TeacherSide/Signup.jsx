import React, { useState } from "react";
import LogoutSuccessModal from "./LogOutSuccessModal";
const Signup = () => {
  const [showLogoutSuccessModal, setShowLogoutSuccessModal] = useState(true);

  return (
    <div className="bg-teal-800 font-poppins h-full  font-poppins ">
      <div className=" p-3 md:px-4 md:py-4 border">
        <div className="text-white text-center ">
          <p className="text-base lg:text-xl">Register Edfling as</p>
          <button className="text-sm md:text-base text-teal-800 bg-white p-2 rounded-md">
            Mentor
          </button>
        </div>
        <div className="bg-white  flex flex-col space-y-3 md:space-y-3 md:flex-row justify-between items-center rounded-xl py-3 md:px-5 md:py-3 w-[80vw] md:w-10/12 m-auto mt-3">
          <div className="w-1/2 md:w-2/4 h-full">
            <img src="/TeacherSide/signup.png" alt="" />
          </div>
          <div className="w-4/5 md:w-2/5 flex flex-col space-y-3 text-sm">
            <div className="text-center">
              <p className="text-xl font-semibold text-teal-800">Sign Up</p>
              <p className="-mt-2 ml-16">as a mentor</p>
            </div>
            <div className="flex flex-col space-y-3 text-xs sm:text-sm">
              <input
                type="text"
                placeholder="Enter your name"
                className="border-1  rounded-lg p-2 outline-none "
              />
              <input
                type="email"
                placeholder="Enter you email"
                className="border-1  rounded-lg p-2 outline-none"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="border-1  rounded-lg p-2 outline-none"
              />
            </div>
            <div className="flex mx-auto items-center space-x-2 md:w-11/12">
              <input
                type="checkbox"
                name=""
                id="terms"
                className=" border-teal-800 "
              />
              <label htmlFor="terms" className="text-xs sm:text-sm ">
                By signing up for edfling course ,you agree to our{" "}
                <span className="text-indigo-800 underline m-1">Terms of use</span>
                and{" "}
                <span className="text-indigo-800 underline">
                  Privacy Policy
                </span>
              </label>
            </div>
            <button className="bg-teal-800 text-white  w-full p-2 rounded-lg text-xs sm:text-sm">
              Sign Up
            </button>
            <div className="flex items-center space-x-4">
              <div className=" w-full h-0.5 border border-gray"></div>
              <p>or</p>
              <div className=" w-full h-0.5 border border-gray"></div>
            </div>
            <div className="flex flex-col space-y-3 text-xs sm:text-sm md:text-base3">
              <button className="flex justify-center space-x-8 border-1 border-teal-800 rounded-xl p-2">
                <img src="/TeacherSide/google.png" alt="" className="w-5 h-5" />
                <span>Continue With Google</span>
              </button>
              <button className="flex  justify-center space-x-8  border-1 border-teal-800 rounded-xl p-2 ">
                <img
                  src="/TeacherSide/facebook.png"
                  alt=""
                  className="w-5 h-5"
                />
                <span>Continue With Facebook</span>
              </button>
              <button className="flex justify-center space-x-8  border-1 border-teal-800 rounded-xl p-2 ">
                <img src="/TeacherSide/apple.png" alt="" className="w-5 h-5" />
                <span>Continue With Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <LogoutSuccessModal
          isOpen={showLogoutSuccessModal}
          onClose={() => setShowLogoutSuccessModal(false)}
        />
      </div>
    </div>
  );
};

export default Signup;
