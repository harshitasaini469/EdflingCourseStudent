import React from 'react'
import AskDoubtsBanner from "./AskDoubtsBanner";
import ToggleButton from "./ToggleButton";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";
import Doubts from './Doubts';
const AskDoubtPage = () => {
  return (
    <div className='flex'>
       <Sidebar />
      <div className="p-3 sm:ml-64 space-y-6 h-[100vh] overflow-y-scroll no-scrollbar">
        <AskDoubtsBanner />
        <ToggleButton />
        <Pagination />
        <Doubts/>
      </div>
    </div>
  )
}

export default AskDoubtPage
