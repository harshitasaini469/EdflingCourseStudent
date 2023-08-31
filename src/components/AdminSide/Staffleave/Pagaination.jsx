import React, { useState } from "react";

import PaginationControls from "../HRdesignation/PaginationControls";
import StaffLeaveTable from "./StaffLeaveTable";
import staffLeaveData from "./staffLeaveData";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  return (
    <div>
      <StaffLeaveTable
        data={staffLeaveData}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <PaginationControls
        totalItems={staffLeaveData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Pagination;
