import React, { useState } from 'react'
import PaginationControls from '../HRdesignation/PaginationControls'
import RolePermissionTable from './RolePermissionTable';
import rolePermissionData from './rolePermissionData';

const RolePermissionPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; 
  return (
    <div className='font-poppins space-y-3 mt-4'>
      <RolePermissionTable data={rolePermissionData} currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <PaginationControls
        totalItems={rolePermissionData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default RolePermissionPagination
