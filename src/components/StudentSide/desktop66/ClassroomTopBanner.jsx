import React from 'react'
import '../../../assets/classroomTopBanner.css'

const ClassroomTopBanner = ({ heading, description, image }) => {
  return (
    <div className='banner  flex flex-col sm:flex-row  items-center gap-2  px-5 py-5 justify-between w-full'>
      <div className='flex flex-col justify-center'>
        <div className='text-white text-2xl sm:text-3xl lg:text-5xl font-semibold'>{heading}</div>
        <div className='text-white text-base lg:text-lg'>{description}</div>
      </div>
      <div className='w-32 sm:w-44 md:w-48 lg:w-52 '>
        <img src={image} alt="banner_image" className='' />
      </div>
    </div>
  )
}

export default ClassroomTopBanner;
