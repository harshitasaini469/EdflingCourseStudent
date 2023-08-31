import React from "react";

const StaffList = ({ staffData }) => {
  return (
    <div className="overflow-x-auto border-2 border-indigo-400 shadow-md rounded-lg mt-4 no-scrollbar">
      <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm ">
        <thead className="bg-teal-100">
          <tr>
            <th  scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
              Staff No.
            </th>
            <th  scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th  scope="col"
              className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th  scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
              Designation
            </th>
            <th  scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
              Department
            </th>
            <th  scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th  scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
              Net Salary
            </th>
            <th  scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
              Salary Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white  divide-y divide-gray-200">
          {staffData.map((staff) => (
            <tr key={staff.staffNo}>
              <td className="px-6 py-4 whitespace-nowrap">{staff.staffNo}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {staff.designation}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {staff.department}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.role}</td>
              <td className={`px-6 py-4 whitespace-nowrap ${staff.salaryStatus==='Paid'?' text-green-500 ':staff.salaryStatus==='Pending'?' text-yellow-500':'text-red-500'}`}>
               <p>{staff.netSalary}</p> 
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p className={` p-2 rounded-2xl flex justify-center items-center gap-2 font-medium ${staff.salaryStatus==='Paid'?'bg-green-100 text-green-500 ':staff.salaryStatus==='Pending'?'bg-yellow-200 text-yellow-500':'bg-red-100 text-red-500'}`}>
              <div className={` rounded-full w-2 h-2 ${staff.salaryStatus==='Paid'?'bg-green-600 ':staff.salaryStatus==='Pending'?'bg-yellow-400':'bg-red-400'}`}></div> <span>{staff.salaryStatus}</span> 

                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffList;
