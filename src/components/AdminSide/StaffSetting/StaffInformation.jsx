import React from 'react';
import StaffInformationFieldTable from './StaffInformationFieldTable';

const StaffInformation = () => {
  // Dummy data for both tables
  const combinedData = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    tableNumber: index < 10 ? 1 : 2, // Assigns Table 1 for the first 10 rows and Table 2 for the rest
    registrationField: `Field ${index + 1}`,
    staffEdit: true,
    required: index % 2 === 0, // Alternate between true and false for the 'required' field
  }));

  // Separate the data for each table
  const table1Data = combinedData.filter((item) => item.tableNumber === 1);
  const table2Data = combinedData.filter((item) => item.tableNumber === 2);

  return (
    <div className='mt-4'>
      <p className='font-medium'>Staff Information Field</p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 p-2 mt-3">
      <div className="sm:w-1/2 ">
        <StaffInformationFieldTable data={table1Data} />
      </div>
      <div className="sm:w-1/2">
        <StaffInformationFieldTable data={table2Data} />
      </div>
    </div>
    </div>
    
  );
};

export default StaffInformation;
