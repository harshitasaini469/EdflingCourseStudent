import React from 'react'

const Separator = ({content}) => {
  return (
    <div className='flex justify-center  items-center gap-3  font-poppins'>
            <img className='w-20' src={'desktop65/line1.png'}/>
            <h3 className='text-2xl text-green-800 font-medium whitespace-nowrap'>{content}</h3>
            <img className='w-20' src={'desktop65/line2.png'}/>
          </div>
  )
}

export default Separator
