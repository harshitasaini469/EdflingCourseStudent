import React from 'react'

const DocumentInfo = () => {
  return (
    <div className='mt-5'>
      <p className='font-medium mb-2'>Document Info</p>
      <div className='grid grid-cols-3 gap-3'>
<FileUpload label={'Resume'}/>
<FileUpload label={'Joining Letter'}/>

<FileUpload label={'Other Document'}/>

      </div>
    </div>
  )
}
const FileUpload=({label})=>{
  return(
    <div className="flex flex-col relative font-poppins">
        <label
          htmlFor="staff-photo"
          className="absolute z-20 top-0 bg-white px-1 text-sm ml-4 "
        >
          {label}
        </label>
        <input
          type="file"
          name="staff-photo"
          id="staff-photo"
          className="relative z-10 top-3 border-1 border-black px-3 py-2 text-sm rounded-md file:bg-teal-800 file:text-white file:outline-none file:rounded-full file:border-0 file:px-2 file:py-1  file:cursor-pointer "
        />
      </div>
  )
}
export default DocumentInfo;
