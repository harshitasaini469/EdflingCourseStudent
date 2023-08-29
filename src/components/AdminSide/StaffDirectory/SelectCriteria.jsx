import React from 'react'
import SelectInput from '../StaffInfoForm/SelectInput'
import TextInput from '../StaffInfoForm/TextInput'
const SelectCriteria = () => {
  return (
    <div className='border-2 border-gray-300 rounded-lg justify-center gap-3 flex flex-col px-4 h-44 font-poppins mt-4'>
      <p className='text-lg text-gray-500'>Select Criteria</p>
      <div className='grid grid-cols-3 gap-3 text-gray-500'>
      <SelectInput
          label={"Search Staff ID"}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <TextInput
          type={"Search By Name"}
          field={"Emergency Mobile"}
          placeholder={""}
          required={true}
        />
        <TextInput
          type={"phone"}
          field={"Emergency Mobile"}
          placeholder={""}
          required={true}
        />
      </div>
    </div>
  )
}

export default SelectCriteria
