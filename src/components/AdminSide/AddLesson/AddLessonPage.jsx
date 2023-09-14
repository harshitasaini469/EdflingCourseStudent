import React from "react";
import AddLesson from "./AddLesson";
import FileOperations from "../HRdesignation/FileOperations";
import Lessonlist from "./Lessonlist";
import AddLessonPagination from "./AddLessonPagination";
const AddLessonPage = () => {
  return (
    <div>
      <button className="rounded-md p-2 bg-gradient-to-r from-teal-600 to-teal-100 font-medium w-fit text-sm sm:text-base">
        Add Lesson & Topic
      </button>
      <div>
        <AddLesson />
      </div>

      <div className="flex items-center justify-between mt-5 font-poppins text-lg">
        <span className="text-gray-500 text-sm sm:text-base">
          Lesson & Topic List
        </span>
        <FileOperations />
      </div>
      <div className="mt-5">
        <AddLessonPagination/>
      </div>
    </div>
  );
};

export default AddLessonPage;
