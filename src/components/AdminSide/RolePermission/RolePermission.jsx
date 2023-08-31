import React from 'react'
import SelectCriteria from './SelectCriteria'
import FileOperations from '../HRdesignation/FileOperations'
import RolePermissionTable from './RolePermissionTable'
import rolePermissionData from './rolePermissionData'
import RolePermissionPagination from './RolePermissionPagination'

const RolePermission = () => {
  return (
    <div className='font-poppins'>
        <button className='rounded-md p-2 bg-gradient-to-r from-teal-600 to-teal-100 font-medium w-fit text-sm sm:text-base'>Role Permission</button>
      <SelectCriteria/>
      <div className='flex items-center gap-3 justify-between text-lg text-black mt-5 sm:px-3'>
        <p className='text-sm sm:text-base font-medium  whitespace-nowrap'>Staff List</p>
        <FileOperations/>
      </div>
      <RolePermissionPagination/>
    </div>
  )
}

export default RolePermission
