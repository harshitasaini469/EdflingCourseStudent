import React from 'react'
import StaffInformation from './StaffInformation'
import TeacherInformationViewTable from './TeacherInformationViewTable'
import { teacherInfoTableData } from './teacherInfoTableData'

const StaffSetting = () => {
  return (
    <div className='font-poppins text-sm sm:text-base'>
      <button className='rounded-md p-2 bg-gradient-to-r from-teal-600 to-teal-100 font-medium w-fit'>Staff Settings</button>
      <StaffInformation/>
      <div className='mt-4'>
        <p className='font-medium mb-3'>Teacher Information View</p>
      <div className='flex flex-col sm:flex-row p-2 gap-3 justify-around'>
        <TeacherInformationViewTable data={teacherInfoTableData}/>
        <TeacherInformationViewTable data={teacherInfoTableData}/>
      </div>
      </div>
      
    </div>
  )
}

export default StaffSetting
