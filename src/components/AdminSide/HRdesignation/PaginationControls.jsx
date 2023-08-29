import React from 'react';

function PaginationControls({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex justify-center mt-4 ">
    
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-3 py-2 font-semibold text-xl"
      >
        {'<'}
      </button>
  

    {Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(index + 1)}
        className={`px-3 py-2 ${
          currentPage === index + 1
            ? 'font-medium text-xl'
            : 'font-regular text-base'
        }`}
      >
        {index + 1}
      </button>
    ))}

    
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-3 py-2 font-semibold text-xl"
      >
        {'>'}
      </button>
  
  </div>
  );
}

export default PaginationControls;
