import React from "react";

const Chats = () => {
  return (
    <div className="font-poppins">
      <div className=" text-2xl md:text-3xl lg:text-5xl text-teal-700 font-semibold mt-4 space-y-2 md:space-y-5">
        <p>Teach Chats</p>
        <hr />
      </div>
      <div className="p-5 flex flex-col space-y-8  ">
        <div className="flex items-center sm:space-x-2 border border-2 bg-white rounded-xl py-1 px-2 sm:px-3 md:px-4 md:w-3/5">
          <svg
            className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.875 26.2188L16.6562 18C16.0312 18.5417 15.3025 18.9635 14.47 19.2656C13.6376 19.5677 12.7517 19.7188 11.8125 19.7188C9.55912 19.7188 7.65203 18.9375 6.09122 17.375C4.53041 15.8125 3.75 13.9271 3.75 11.7188C3.75 9.51042 4.53125 7.625 6.09375 6.0625C7.65625 4.5 9.54688 3.71875 11.7656 3.71875C13.9844 3.71875 15.8698 4.5 17.4219 6.0625C18.974 7.625 19.75 9.51198 19.75 11.7234C19.75 12.6161 19.6042 13.4792 19.3125 14.3125C19.0208 15.1458 18.5833 15.9271 18 16.6562L26.25 24.8438L24.875 26.2188ZM11.7812 17.8438C13.474 17.8438 14.9128 17.2448 16.0977 16.0469C17.2826 14.849 17.875 13.4062 17.875 11.7188C17.875 10.0312 17.2826 8.58854 16.0977 7.39062C14.9128 6.19271 13.474 5.59375 11.7812 5.59375C10.0712 5.59375 8.61762 6.19271 7.42056 7.39062C6.22352 8.58854 5.625 10.0312 5.625 11.7188C5.625 13.4062 6.22352 14.849 7.42056 16.0469C8.61762 17.2448 10.0712 17.8438 11.7812 17.8438Z"
              fill="black"
            />
          </svg>

          <input
            type="text"
            className="bg-transparent rounded-md px-2 py-1 focus:outline-none text-xs sm:text-sm md:text-base"
            placeholder="Search student name"
          />
        </div>

        <div className="flex gap-5 flex-wrap justify-center items-center">
          <div className="w-full sm:w-1/2 md:w-1/3 p-3 sm:p-4 md:p-5 box-content active:border-2 active:rounded-md active:border-teal-800">
            <div className="h-40 sm:h-48 md:h-56 lg:h-72 md:px-2  border rounded-md flex justify-center items-center text-center text-lg sm:text-xl md:text-lg lg:text-3xl font-semibold bg-gradient-to-r from-emerald-700 to-emerald-100">
              <p>Group Chat</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3  p-3 sm:p-4 md:p-5 box-content active:border-2 active:rounded-md active:border-teal-800">
            <div className="h-40 sm:h-48 md:h-56 lg:h-72 md:px-2 border rounded-md flex justify-center items-center text-center text-lg sm:text-xl md:text-lg lg:text-3xl font-semibold bg-gradient-to-r from-emerald-700 to-emerald-100">
              <p>Discussion Forums</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-3 sm:p-4 md:p-5 box-content active:border-2 active:rounded-md active:border-teal-800">
            <div className="h-40 sm:h-48 md:h-56 lg:h-72 md:px-2  border rounded-md flex justify-center items-center text-center text-lg sm:text-xl md:text-lg lg:text-3xl font-semibold bg-gradient-to-r from-emerald-700 to-emerald-100">
              <p>One-on-One Chats</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mx-auto">
        <span>Load More</span>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-end"
        >
          <path
            d="M4.5159 7.96967C4.78493 7.7034 5.20592 7.6792 5.50259 7.89705L5.58758 7.96967L12.1245 14.439L18.6614 7.96967C18.9304 7.7034 19.3514 7.6792 19.648 7.89705L19.733 7.96967C20.0021 8.23594 20.0265 8.6526 19.8064 8.94621L19.733 9.03033L12.6603 16.0303C12.3913 16.2966 11.9703 16.3208 11.6736 16.1029L11.5886 16.0303L4.5159 9.03033C4.21996 8.73744 4.21996 8.26256 4.5159 7.96967Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Chats;
