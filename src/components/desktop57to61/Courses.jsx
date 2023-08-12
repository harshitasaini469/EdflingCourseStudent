import React from 'react'
import Sidebar from "./Sidebar";
import CoursesNav from "./CoursesNav";
import EmbeddedVideo from "./EmbeddedVideo";
import Transcript from "./Transcript";
import LikeDislikeComment from "./LikeDislikeComment";
import Comments from "./Comments";
const Courses = () => {
  return (
    <div>
      <Sidebar />
      <div className="p-3 sm:ml-64 space-y-4 ">
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

export default Courses
