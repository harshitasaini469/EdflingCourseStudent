import React from 'react'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
const BankInfo = () => {
  return (
    <div className='mt-5 font-poppins'>
      <p className='font-medium mb-2'>Bank Info Details</p>
      <div className='grid grid-cols-4 gap-3'>
      <TextInput
        type={"text"}
        field={"Bank Account Name"}
        placeholder={""}
        required={true}
      />
      <TextInput
        type={"text"}
        field={"Account No."}
        placeholder={""}
        required={true}
      />
        <TextInput
        type={"text"}
        field={"Bank Name"}
        placeholder={""}
        required={true}
      />
      <TextInput
        type={"text"}
        field={"Branch Name"}
        placeholder={""}
        required={true}
      />
    
      </div>
     
      
    </div>
  )
}

export default BankInfo
