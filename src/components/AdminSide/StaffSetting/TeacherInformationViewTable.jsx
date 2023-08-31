import React from "react";

const TeacherInformationViewTable = ({ data }) => {
  return (
    <div className="sm:w-3/5  shadow-md rounded-xl text-sm border-2 border-indigo-300 overflow-x-auto no-scrollbar font-poppins">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-cyan-200">
          <tr>
            <th scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Field</th>
            <th scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">View</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.field}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className={` px-4 py-2 rounded-full font-medium flex items-center gap-2  ${
                    item.view ? "bg-green-200 text-green-600"
                    : "bg-red-100 text-red-600"
                  }`}
                 
                >
                  <div
                  className={`rounded-full w-2 h-2 ${
                    item.view ? "bg-green-600 " : "bg-red-500"
                  }`}
                ></div>
                 <p>{item.view ? "Enabled" : "Disabled"}</p> 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherInformationViewTable;
