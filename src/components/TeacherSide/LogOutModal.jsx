import React, { useState } from 'react';

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="relative bg-gray-500 rounded-lg p-8 text-sm sm:text-base">
      <button className='absolute top-2 right-4'>X</button>
        <p className="mb-4 text-center text-white">Are you sure you want to logout?</p>
        <div className="flex justify-between">
          <button
            className="bg-green-500  px-4 py-2 rounded-md mr-2 "
            onClick={onLogout}
          >
            Continue
          </button>
          <button
            className="bg-slate-300 text-white px-4 py-2 rounded-md "
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
