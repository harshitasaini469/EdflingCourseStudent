import React from 'react'
import About from '../components/desktop18/About'
import Mentors from '../components/desktop18/Mentors'
import componentData from '../components/desktop18/componentData'


const Page18 = () => {
  return (
    <div className="container">
    <About />
    <Mentors componentData={componentData} />
  </div>
  )
}

export default Page18
