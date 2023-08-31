import React from 'react'
import StaffLeaveTable from './StaffLeaveTable'
import staffLeaveData from './staffLeaveData'
import Pagination from './Pagaination'
import FileOperations from '../HRdesignation/FileOperations'

const StaffLeave = () => {
  return (
    <div className='font-poppins'>
        <button className='rounded-md p-2 bg-gradient-to-r from-teal-600 to-teal-100 font-medium w-fit text-sm sm:text-base'>Leave Request</button>
        <div className='flex items-center gap-3 justify-between text-lg text-gray-500 mt-5 sm:px-3'>
        <p className='text-sm sm:text-base whitespace-nowrap'>Staff List</p>
        <FileOperations/>
      </div>
        <Pagination/>
    </div>
  )
}

export default StaffLeave
