import React from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Chats from './Chats'
import Enrollment from './Enrollment'
import GroupChat from './GroupChat'
import CreateAssignment from './CreateAssignment'

const TeacherSide = () => {
  return (
    <div>
       <Sidebar />
      <div className="sm:ml-60">
        <Nav />
      </div>
      <div className='p-4 sm:ml-64'>
        {/* <Enrollment/> */}
        {/* <Chats/> */}
        {/* <GroupChat/> */}
        <CreateAssignment/>
      </div>
    </div>
  )
}

export default TeacherSide
