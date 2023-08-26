import React from "react";
import ClassroomTopBanner from "../components/StudentSide/desktop66/ClassroomTopBanner";
import Sidebar from "../components/StudentSide/desktop66/Sidebar";
import Pagination from "../components/StudentSide/desktop66/Pagination";
import Problem from "../components/StudentSide/desktop66/Problem";
import { connect } from "react-redux";

const Page66 = ({ isSidebarOpen }) => {
  let heading = "Bookmarks";
  let description =
    "Keep Revising important concepts anytime by revisiting your bookmarks";
  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="p-4 md:ml-64 space-y-6 h-[100vh] overflow-y-scroll no-scrollbar">
        <ClassroomTopBanner
          heading={heading}
          description={description}
          image={"./desktop66/bookmark.png"}
        />
        <Pagination />
        <div className="space-y-10 py-3 ">
          <Problem />
          <Problem />
          <Problem />
          <Problem />
          <Problem />
          <Problem />
          <Problem />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

export default connect(mapStateToProps)(Page66);
