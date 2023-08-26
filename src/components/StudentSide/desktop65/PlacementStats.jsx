import React from 'react'

const SubmitPlacement = () => {
  return (
    <div className='flex flex-wrap gap-3 justify-center  items-center  w-full sm:justify-between bg-teal-800 rounded-2xl mt-5 py-4 px-4 font-poppins' >
      <div className='flex  items-center gap-3 '>
        <img src={'/desktop65/placement.png'} alt="placement" />
        <div className='text-white text-base sm:text-lg md:text-xl lg:text-2xl '>Share your placement with us</div>
      </div>
      <div className='flex w-fit justify-end'>
        <button className='bg-white rounded-lg p-2 sm:px-3 sm:py-3 text-teal-800 text-sm sm:text-base font-medium whitespace-nowrap'>Submit Placement Details</button>
      </div>
    </div>
  )
}

const PlacementStats = () => {
  return (
    <div className='w-full'>
      <SubmitPlacement/>
    </div>
  )
}

export default PlacementStats;
