import React from 'react'
import { connect } from 'react-redux';
import AddDepartment from './AddDepartment';
import Pagination from './Pagination';
import FileOperations from './FileOperations';

const HRDesignation = () => {
  return (
    <div className='space-y-3'>
       <FileOperations/>
      <AddDepartment/> 
      <Pagination/>
      
  </div>
  )
}


const mapStateToProps = (state) => ({
    isSidebarOpen: state.sidebar.isSidebarOpen,
  });
  
  export default connect(mapStateToProps)(HRDesignation);