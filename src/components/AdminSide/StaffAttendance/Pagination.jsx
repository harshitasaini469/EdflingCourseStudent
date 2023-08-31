import React, { useState } from "react";
import StaffAttendanceList from "./StaffAttendanceLIst";
import staffAttendanceData from "./staffAttendanceData";
import PaginationControls from "../HRdesignation/PaginationControls";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  return (
    <div>
      <StaffAttendanceList
        data={staffAttendanceData}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <PaginationControls
        totalItems={staffAttendanceData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Pagination;
