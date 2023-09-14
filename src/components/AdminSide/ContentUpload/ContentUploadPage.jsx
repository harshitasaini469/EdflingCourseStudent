import React from 'react'
import UploadContent from './UploadContent'
import FileOperations from '../HRdesignation/FileOperations'
import Contentlist from './Contentlist'
const ContentUploadPage = () => {
  return (
    <div>
      <button className='rounded-md p-2 bg-gradient-to-r from-teal-600 to-teal-100 font-medium w-fit text-sm sm:text-base'>Content</button>
      <UploadContent/>
      <div className="flex items-center justify-between mt-5 font-poppins text-lg">

          <span className="text-gray-500 text-sm sm:text-base">Content List</span>
        <FileOperations />
      </div>
      <Contentlist/>
    </div>
  )
}

export default ContentUploadPage
