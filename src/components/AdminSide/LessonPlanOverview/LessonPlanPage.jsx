import React from "react";
import LessonPlan from "./LessonPlan";
import FileOperations from "../HRdesignation/FileOperations";
import Overviewlist from "./Overviewlist";

const LessonPlanPage = () => {
  return (
    <div>
      <button className="rounded-md p-2 bg-gradient-to-r from-teal-600 to-teal-100 font-medium w-fit text-sm sm:text-base">
        Lesson Plan Overview and Topic Overview
      </button>
      <LessonPlan/>
      <div className="mt-5">
        <FileOperations/>
      </div>
      <div className="mt-5">
<Overviewlist/>
      </div>
    </div>
  );
};

export default LessonPlanPage;
