import React from "react";

const OverviewList = () => {
  const lessonPlanData = [
    {
      sl: 1,
      class: "Class A",
      teacher: "John Doe",
      section: "Section 1",
      subject: "Math",
      lesson: "Addition",
      completedDate: "2023-09-01",
      status: "Completed",
    },
    {
      sl: 2,
      class: "Class B",
      teacher: "Jane Smith",
      section: "Section 2",
      subject: "Science",
      lesson: "Chemistry",
      completedDate: "2023-09-05",
      status: "Completed",
    },
    {
      sl: 3,
      class: "Class C",
      teacher: "Michael Johnson",
      section: "Section 1",
      subject: "English",
      lesson: "Grammar",
      completedDate: "2023-09-08",
      status: "Pending",
    },
    {
      sl: 4,
      class: "Class A",
      teacher: "Emily Davis",
      section: "Section 2",
      subject: "History",
      lesson: "Ancient Civilizations",
      completedDate: "2023-09-10",
      status: "Completed",
    },
    {
      sl: 5,
      class: "Class D",
      teacher: "Robert Wilson",
      section: "Section 1",
      subject: "Geography",
      lesson: "Continents",
      completedDate: "2023-09-15",
      status: "Completed",
    },
    {
      sl: 6,
      class: "Class B",
      teacher: "Mary Brown",
      section: "Section 1",
      subject: "Math",
      lesson: "Subtraction",
      completedDate: "2023-09-20",
      status: "Pending",
    },
  ];

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
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Class
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Teacher
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Section
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Subject
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Lesson
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
            >
              Completed Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {lessonPlanData.map((data) => (
            <tr key={data.sl} className="text-gray-500">
              <td className="px-6 py-4 whitespace-nowrap">{data.sl}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.class}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.teacher}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.section}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.subject}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.lesson}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.completedDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OverviewList;
