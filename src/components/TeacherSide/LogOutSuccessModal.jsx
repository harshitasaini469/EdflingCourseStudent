import React from "react";

const LogoutSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // Render nothing if the modal is not open
  }

  return (
    <div className="fixed inset-0 flex items-center bg-gray-800 bg-opacity-50 justify-center z-50 font-poppins">
      <div className="relative bg-gray-500 w-fit p-3 md:p-6 rounded-lg shadow-lg text-sm sm:text-base">
        <button
          onClick={onClose} // Call the onClose function when the button is clicked
          className="absolute top-2 right-3  cursor-pointer"
        >
          {/* You can use any appropriate icon or text for your close button */}
          X
        </button>
        <p className="mt-4">You have been successfully logged out.</p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose} // Call the onClose function when the close button is clicked
            className="px-4  py-2 bg-stone-700 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutSuccessModal;
