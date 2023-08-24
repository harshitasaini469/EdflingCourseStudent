import React from "react";
import AnalyticsTable from "./AnalyticsTable";

const Analytics = () => {
  return (
    <div className="space-y-3">
      <div>
        <img src="/TeacherSide/activity.png" alt="" className="w-10/12" />
      </div>
      <div>
        <img src="/TeacherSide/submission.png" alt="" className="w-10/12" />
      </div>
      <div>
        <img src="/TeacherSide/grades.png" alt="" className="w-10/12" />
      </div>
      <div>
        <AnalyticsTable />
      </div>
    </div>
  );
};

export default Analytics;
