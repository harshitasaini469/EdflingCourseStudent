import React from 'react'
import TextInput from './TextInput';
const SocialLink = () => {
  return (
    <div className='mt-5'>
      <p className='font-medium mb-2'>Social Link Details</p>
      <div className='flex flex-col sm:grid grid-cols-3 gap-3'>
      <TextInput
        type={"url"}
        field={"Facebook URL"}
        placeholder={""}
        required={true}
      />
      <TextInput
        type={"url"}
        field={"Twitter URL"}
        placeholder={""}
        required={true}
      />
       <TextInput
        type={"url"}
        field={"LinkedIN URL"}
        placeholder={""}
        required={true}
      />
      </div>
    </div>
  )
}

export default SocialLink;
