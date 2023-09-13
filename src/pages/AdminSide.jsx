import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/AdminSide/Sidebar";
import Nav from "../components/AdminSide/Nav";
import HRDesignation from "../components/AdminSide/HRdesignation/HRDesignation";
import { connect } from "react-redux";
import StaffInfo from "../components/AdminSide/StaffInfoForm/StaffInfo";
import StaffDirectory from "../components/AdminSide/StaffDirectory/StaffDirectory";
import StaffAttendance from "../components/AdminSide/StaffAttendance/StaffAttendance";
import Payroll from "../components/AdminSide/payroll/Payroll";
import StaffLeave from "../components/AdminSide/Staffleave/StaffLeave";
import RolePermission from "../components/AdminSide/RolePermission/RolePermission";
import StaffSetting from "../components/AdminSide/StaffSetting/StaffSetting";

const AdminSide = ({ isSidebarOpen }) => {
  return (
    <div>
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className={`flex flex-col md:ml-64 w-full space-y-5 h-[100vh] overflow-y-scroll no-scrollbar ${isSidebarOpen?'bg-gray-200':''}`}>
          <div className="">
            <Nav />
          </div>
          <div className="p-4">
            <Routes>
              <Route path="/" element={<HRDesignation />} />
              <Route path="/staff-info" element={<StaffInfo/>}/>
              <Route path="/staff-directory" element={<StaffDirectory/>}/>
              <Route path="/staff-attendance" element={<StaffAttendance/>}/>
              <Route path="/payroll" element={<Payroll/>}/>
              <Route path="/staff-leave" element={<StaffLeave/>}/>
              <Route path="/role-permission" element={<RolePermission/>}/>
              <Route path="/staff-setting" element={<StaffSetting/>}/>
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
