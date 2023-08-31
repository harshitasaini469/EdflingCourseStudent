import React, { useState } from 'react';

const StaffDirectoryList = ({ staffData }) => {
  const [staffStatus,setStaffStatus]=useState('')

  const handleStaffStatus=(status)=>{
    setStaffStatus(status)
  }
  return (
    <div className="bg-white shadow-md rounded-xl text-xs sm:text-sm border-2 border-indigo-300 overflow-x-auto no-scrollbar font-poppins">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-sky-200">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
            >
              Staff No.
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Department
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Designation
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {staffData.map((staff) => (
            <tr key={staff.id}>
              <td className="px-6 py-4 whitespace-nowrap">{staff.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.department}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.designation}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.email}</td>
              <td className="px-6 py-4 whitespace-nowrap"><button onClick={handleStaffStatus} className={`flex items-center gap-2 px-3 py-2 rounded-2xl ${staff.status==='Active'?'bg-green-200 text-green-600':'bg-red-100 text-red-600'}`}><div className={`w-2 h-2 rounded-full ${staff.status==='Active'?'bg-green-700':'bg-red-600 '}`}></div><span>{staff.status}</span></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffDirectoryList;
