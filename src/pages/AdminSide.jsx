import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/AdminSide/Sidebar";
import Nav from "../components/AdminSide/HRdesignation/Nav";
import HRDesignation from "../components/AdminSide/HRdesignation/HRDesignation";
import { connect } from "react-redux";
import StaffInfo from "../components/AdminSide/StaffInfoForm/StaffInfo";
import StaffDirectory from "../components/AdminSide/StaffDirectory/StaffDirectory";

const AdminSide = ({ isSidebarOpen }) => {
  return (
    <div>
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <div className="flex flex-col md:ml-64  w-full space-y-5 h-[100vh] overflow-y-scroll no-scrollbar">
          <div className="">
            <Nav />
          </div>
          <div className="p-4">
            <Routes>
              <Route path="/" element={<HRDesignation />} />
              <Route path="/staff-info" element={<StaffInfo/>}/>
              <Route path="/staff-directory" element={<StaffDirectory/>}/>

            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

export default connect(mapStateToProps)(AdminSide);
