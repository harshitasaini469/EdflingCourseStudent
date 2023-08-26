import React from 'react'
import AskDoubtsBanner from "./AskDoubtsBanner";
import ToggleButton from "./ToggleButton";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";
import Doubts from './Doubts';
import { connect } from 'react-redux';

const AskDoubtPage = ({ isSidebarOpen }) => {
  return (
    <div className='flex'>
       <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="p-3 md:ml-64 space-y-6 h-[100vh] overflow-y-scroll no-scrollbar">
        <AskDoubtsBanner />
        <ToggleButton />
        <Pagination />
        <Doubts/>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

export default connect(mapStateToProps)(AskDoubtPage);

