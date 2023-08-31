import React, { useState } from "react";
import {X} from 'lucide-react'
import { connect } from "react-redux";
import {
  openSidebar,
  closeSidebar,
} from "../../redux/actions/sidebarActions.js";
const Sidebar = ({ isSidebarOpen,openSidebar, closeSidebar }) => {
  const toggleSidebar = () => {
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };
  const sidebarData = [
    {
      item: "Dasboard",
      svg: "/AdminSide/dashboard.svg",
    },
    {
      item: "Admin",
      svg: "/AdminSide/admin.svg",
    },
    {
      item: "Academics",
      svg: "/AdminSide/academics.svg",
    },
    {
      item: "StudyMaterial",
      svg: "/AdminSide/profile2user.svg",
    },
    {
      item: "Student",
      svg: "/AdminSide/student.svg",
    },
    {
      item: "Examination",
      svg: "/AdminSide/examination.svg",
    },
    {
      item: "HR",
      svg: "/AdminSide/hr.svg",
    },
    {
      item: "Leaves",
      svg: "/AdminSide/leave.svg",
    },
    {
      item: "Accounts",
      svg: "/AdminSide/wallet.svg",
    },
    {
      item: "Utilites",
      svg: "/AdminSide/communicate.svg",
    },
    {
      item: "Reports",
      svg: "/AdminSide/Graph Report.svg",
    },
    {
      item: "Settings",
      svg: "/AdminSide/Settings.svg",
    },
    {
      item: "Modules",
      svg: "/AdminSide/modules.svg",
    },
  ];
  return (
    <div className="relative  ">
      <aside
        id="default-sidebar"
        className={`absolute z-40 top-0 left-0 h-screen w-fit  md:w-64  transition-transform ${
          isSidebarOpen ? "translate-x-0 " : "-translate-x-full  "
        } md:translate-x-0 duration-300 ease-in-out`}
        aria-label="Sidebar"
      >
        <div class="h-full flex flex-col px-4 justify-between overflow-y-auto no-scrollbar bg-teal-900 text-sm font-poppins">
          <div>
            <div className="w-32 h-20 relative px-3 py-4">
              <img src="/desktop6364/Ellipse.png" alt="" />
              <div className="absolute top-10 px-2">
                <p className="self-center  text-xl font-semibold whitespace-nowrap text-white ">
                  Admin Panel
                </p>
              </div>
            </div>
            <ul className="space-y-1 text-base px-3 py-4">
              {sidebarData.map((sidebar) => (
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 "
                  >
                    <img src={sidebar.svg} alt="" />
                    <span class="ml-3">{sidebar.item}</span>
                  </a>
                </li>
              ))}
            </ul>
        
          </div>
        </div>
      </aside>
      <button
        className={`w-fit fixed z-50 p-2  ml-60   ${
          isSidebarOpen ? "block" : "hidden"
        }  
        }`}
        onClick={toggleSidebar}
      >
        <X size={26} />
      </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
