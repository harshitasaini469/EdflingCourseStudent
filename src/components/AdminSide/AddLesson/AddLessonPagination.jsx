import React, { useState } from 'react'
import Lessonlist from './Lessonlist';
import PaginationControls from '../HRdesignation/PaginationControls';
import dummyData from './dummyData';
const AddLessonPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; 
  return (
    <div className='font-poppins space-y-3 mt-4'>
   <Lessonlist data={dummyData} currentPage={currentPage} itemsPerPage={itemsPerPage} />
   <PaginationControls
     totalItems={dummyData.length}
     itemsPerPage={itemsPerPage}
     currentPage={currentPage}
     onPageChange={setCurrentPage}
   />
 </div>
  )
}

export default AddLessonPagination
