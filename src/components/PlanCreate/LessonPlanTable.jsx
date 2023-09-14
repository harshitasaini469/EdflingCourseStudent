import React from "react";

const LessonPlanTable = () => {
  // Generate dates for a week starting from Saturday, July 31, 2023
  const startDate = new Date("2023-07-31");
  const daysOfWeek = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    daysOfWeek.push(currentDate);
  }

  return (
    <div className="bg-white shadow-md rounded-xl text-xs sm:text-sm border-2 border-indigo-300 overflow-x-auto no-scrollbar font-poppins">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-sky-200">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              SL
            </th>
            {daysOfWeek.map((day, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {day.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">1</td>
            {daysOfWeek.map((day, index) => (
              <td
                key={index}
                className="px-6 py-4 whitespace-nowrap"
              >
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LessonPlanTable;
