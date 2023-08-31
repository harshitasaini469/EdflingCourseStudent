import React from "react";
import { Menu } from "lucide-react";
import { connect } from "react-redux";
import {
  openSidebar,
  closeSidebar,
} from "../../redux/actions/sidebarActions.js";

const Nav = ({ isSidebarOpen, openSidebar, closeSidebar }) => {
  const toggleSidebar = () => {
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  return (
    <div
      className={`flex flex-wrap space-y-2 justify-around items-center font-poppins mt-3 text-sm sm:text-base ${
        isSidebarOpen ? "" : ""
      }`}
    >
      <div className="flex gap-3 items-center">
        <div>
          <button className="" onClick={toggleSidebar}>
            {<Menu />}
          </button>
        </div>
        <div className="flex gap-3 bg-teal-800 w-fit px-4 py-1 rounded-md shadow-md shadow-black/50">
          <svg
            className="w-5 h-5 sm:w-7 sm:h-7"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.875 26.2188L16.6562 18C16.0312 18.5417 15.3025 18.9635 14.47 19.2656C13.6376 19.5677 12.7517 19.7188 11.8125 19.7188C9.55912 19.7188 7.65203 18.9375 6.09122 17.375C4.53041 15.8125 3.75 13.9271 3.75 11.7188C3.75 9.51042 4.53125 7.625 6.09375 6.0625C7.65625 4.5 9.54688 3.71875 11.7656 3.71875C13.9844 3.71875 15.8698 4.5 17.4219 6.0625C18.974 7.625 19.75 9.51198 19.75 11.7234C19.75 12.6161 19.6042 13.4792 19.3125 14.3125C19.0208 15.1458 18.5833 15.9271 18 16.6562L26.25 24.8438L24.875 26.2188ZM11.7812 17.8438C13.474 17.8438 14.9128 17.2448 16.0977 16.0469C17.2826 14.849 17.875 13.4062 17.875 11.7188C17.875 10.0312 17.2826 8.58854 16.0977 7.39062C14.9128 6.19271 13.474 5.59375 11.7812 5.59375C10.0712 5.59375 8.61762 6.19271 7.42056 7.39062C6.22352 8.58854 5.625 10.0312 5.625 11.7188C5.625 13.4062 6.22352 14.849 7.42056 16.0469C8.61762 17.2448 10.0712 17.8438 11.7812 17.8438Z"
              fill="white"
            />
          </svg>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="bg-transparent text-white outline-none"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 font-medium">
        <a href="#">WEBSITE</a>
        <a href="#">DASHBOARD</a>
        <a href="#">REPORTS</a>
      </div>
      <div className="flex justify-center items-center gap-3">
        <button className="text-teal-800 font-medium">Login</button>
        <button className="bg-teal-800 px-2 py-1 text-white rounded-md">
          Signup
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

const mapDispatchToProps = {
  openSidebar,
  closeSidebar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
