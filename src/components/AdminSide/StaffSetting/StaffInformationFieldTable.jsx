import React from 'react';

const StaffInformationFieldTable = ({ data }) => {
  return (
    <div className="shadow-md rounded-xl text-xs sm:text-sm border-2 border-indigo-300 overflow-x-auto no-scrollbar font-poppins ">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className='bg-cyan-200'>
          <tr>
            <th scope="col"
              className="px-4 py-3 text-left  font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider">Registration Field</th>
            <th scope="col"
              className="px-4 py-3 text-left  font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider">Staff Edit</th>
            <th scope="col"
              className="px-4 py-3 text-left font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider">Required</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 '>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.registrationField}</td>
              <td className="px-6 py-4 whitespace-nowrap">
               <button className={`px-4 py-2 rounded-full font-medium flex items-center gap-2 ${
                    item.staffEdit
                      ? "bg-green-100 text-green-600"
                      : "bg-red-200 text-red-600"
                  }`}>
                    <div
                    className={`rounded-full w-2 h-2 ${
                      item.staffEdit ? "bg-green-600 " : "bg-red-500"
                    }`}
                  ></div>
                    <p>{item.staffEdit?'Enable':'Disable'}</p></button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
               <button className={`px-4 py-2 rounded-full font-medium flex items-center gap-2 ${
                    item.required
                      ? "bg-green-200 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}><div
                  className={`rounded-full w-2 h-2 ${
                    item.required ? "bg-green-600 " : "bg-red-500"
                  }`}
                ></div><p>{item.required?'Enable':'Disable'}</p></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffInformationFieldTable;
