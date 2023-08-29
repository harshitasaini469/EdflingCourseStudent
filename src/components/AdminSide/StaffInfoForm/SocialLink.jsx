import React from 'react'
import TextInput from './TextInput';
const SocialLink = () => {
  return (
    <div className='mt-5'>
      <p className='font-medium mb-2'>Social Link Details</p>
      <div className='grid grid-cols-3 gap-3'>
      <TextInput
        type={"text"}
        field={"Facebook URL"}
        placeholder={""}
        required={true}
      />
      <TextInput
        type={"text"}
        field={"Twitter URL"}
        placeholder={""}
        required={true}
      />
       <TextInput
        type={"text"}
        field={"LinkedIN URL"}
        placeholder={""}
        required={true}
      />
      </div>
    </div>
  )
}

export default SocialLink;
