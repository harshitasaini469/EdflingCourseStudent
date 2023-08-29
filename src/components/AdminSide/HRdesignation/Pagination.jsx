import React, { useState } from 'react'
import DesignationList from './DesignationList';
import PaginationControls from './PaginationControls';
import designationsData from './designationData';
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  return (
    <div className='font-poppins space-y-3 mt-4'>
       <h1 className='font-medium'>Department List</h1>
      <DesignationList data={designationsData} currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <PaginationControls
        totalItems={designationsData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default Pagination
