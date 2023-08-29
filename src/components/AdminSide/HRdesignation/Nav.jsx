import React from "react";
import { Menu } from "lucide-react";
import { connect } from 'react-redux';
import { openSidebar, closeSidebar } from '../../../redux/actions/sidebarActions.js'

const Nav = ({ isSidebarOpen, openSidebar, closeSidebar }) => {
  const toggleSidebar = () => {
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  return (
    <div className={`flex flex-wrap justify-around items-center font-poppins mt-3 ${isSidebarOpen? '':''}`  }>
      <div className="flex gap-3 items-center">
        <div>
          <button className="" onClick={toggleSidebar}>{<Menu />}</button>
        </div>
        <div className="flex gap-3 bg-teal-800 w-fit px-4 py-1 rounded-md shadow-md shadow-black/50">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG path here */}
          </svg>
          <input type="text" name="" id="" placeholder="Search" className="bg-transparent text-white outline-none" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 font-medium">
        <a href="#">WEBSITE</a>
        <a href="#">DASHBOARD</a>
        <a href="#">REPORTS</a>
      </div>
      <div className="flex justify-center items-center gap-3">
        <button className="text-teal-800 font-medium">Login</button>
        <button className="bg-teal-800 px-2 py-1 text-white rounded-md">Signup</button>
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
