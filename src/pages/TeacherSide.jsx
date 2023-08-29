import React from "react";
import {  Routes, Route } from "react-router-dom";
import Sidebar from "../components/TeacherSide/Sidebar";
import Nav from "../components/TeacherSide/Nav";
import Chats from "../components/TeacherSide/Chats";
import Enrollment from "../components/TeacherSide/Enrollment";
import GroupChat from "../components/TeacherSide/GroupChat";
import CreateAssignment from "../components/TeacherSide/CreateAssignment";
import Assignment from "../components/TeacherSide/Assignment";
import Quiz from "../components/TeacherSide/Quiz";
import CreateQuiz from "../components/TeacherSide/CreateQuiz";
import Analytics from "../components/TeacherSide/Analytics";
import UpdateCoursePage from "../components/TeacherSide/UpdateCoursePage";
import LogOut from "../components/TeacherSide/LogOut";
import { connect } from "react-redux";

const TeacherSide = ({ isSidebarOpen }) => {
  return (
    <div className="flex  ">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-col md:ml-64 border w-full space-y-5 h-[100vh] overflow-y-scroll no-scrollbar">
        <div className="">
          <Nav />
        </div>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Enrollment />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/group-chat" element={<GroupChat />} />
            <Route path="/create-assign" element={<CreateAssignment />} />
            <Route path="/assign" element={<Assignment />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/create-quiz" element={<CreateQuiz />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/update-course" element={<UpdateCoursePage />} />
            <Route path="/log-out" element={<LogOut />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

export default connect(mapStateToProps)(TeacherSide);
