import React from 'react'
import Sidebar from "./Sidebar";
import CoursesNav from "./CoursesNav";
import Transcript from "./Transcript";
import LikeDislikeComment from "./LikeDislikeComment";
import Comments from "./Comments";
import { connect } from 'react-redux';
import EmbeddedVideo from './EmbeddedVideo';

const Courses = ({ isSidebarOpen }) => {
  return (
    <div className='flex'>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="p-3 md:ml-64 space-y-6 h-[100vh] overflow-y-scroll no-scrollbar">
        <CoursesNav />
        <EmbeddedVideo />
        <Transcript />
        <LikeDislikeComment size={"video"} />
        <Comments />
        <Comments />
        <div>
          <p className="text-teal-800 text-lg font-poppins cursor-pointer">
            View more comments...
          </p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

export default connect(mapStateToProps)(Courses);

