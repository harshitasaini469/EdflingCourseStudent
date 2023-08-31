import React from 'react'
import SelectCriteria from './SelectCriteria'
import FileOperations from '../HRdesignation/FileOperations'
import StaffList from './StaffList'
import staffData from './staffData'

const Payroll = () => {
  return (
    <div className='font-poppins'>
      <button className='rounded-md p-2 bg-gradient-to-r from-teal-600 to-teal-100 font-medium w-fit text-sm sm:text-base'>Generate Payroll</button>
      <SelectCriteria/>
      <div className='flex items-center gap-3 justify-between text-lg text-gray-500 mt-5 sm:px-3'>
        <p className='text-sm sm:text-base whitespace-nowrap'>Staff List</p>
        <FileOperations/>
      </div>
      <StaffList staffData={staffData}/>

    </div>
  )
}

export default Payroll
