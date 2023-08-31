import React from 'react'
import BasicInfo from './BasicInfo';
import Payroll from './Payroll';
import BankInfo from './BankInfo';
import SocialLink from './SocialLink';
import DocumentInfo from './DocumentInfo';

const StaffInfo = () => {
  return (
    <div className='font-poppins text-sm sm:text-base'>
      <div className='flex justify-between mb-3'>
        <button className='rounded-md p-2 bg-gradient-to-r from-teal-800 to-teal-100 font-medium'>Add New Staff</button>
        <button className='rounded-md bg-teal-800 text-white p-2 font-medium'>Import Staff</button>
      </div>
      <p className='font-medium text-center text-lg  mb-3 '>Staff Information</p>
      <div>
      <BasicInfo/>
      <Payroll/>
      <BankInfo/>
      <SocialLink/>
      <DocumentInfo/>
      </div>
     
      <button className='bg-teal-800 px-3 py-2 mt-5 flex justify-center mx-auto text-white rounded-full  '>Save staff</button>
    </div>
  )
}

export default StaffInfo;
