import React from 'react'
import About from '../components/StudentSide/desktop18/About'

import Mentors from '../components/StudentSide/desktop18/Mentors'
import componentData from '../components/StudentSide/desktop18/componentData'


const Page18 = () => {
  return (
    <div className="container">
    <About />

    <Mentors componentData={componentData} />
  </div>
  )
}

export default Page18
