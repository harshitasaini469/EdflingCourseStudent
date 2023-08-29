import React from 'react'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
const Payroll = () => {
  return (
    <div className='mt-5 font-poppins'>
      <p className='font-medium mb-2'>Payroll Details</p>
      <div className='grid grid-cols-4 gap-3'>
      <TextInput
        type={"text"}
        field={"EPF NO."}
        placeholder={""}
        required={true}
      />
      <TextInput
        type={"text"}
        field={"Basic Salary"}
        placeholder={""}
        required={true}
      />
    <SelectInput label={'Contact Type'} options={[
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ]}/>
    <SelectInput label={'Location'} options={[
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ]}/>
      </div>
     
      
    </div>
  )
}

export default Payroll
