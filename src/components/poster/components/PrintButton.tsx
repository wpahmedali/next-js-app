import React from 'react';

const PrintButton = () => {
  const handlePrint = () => {
    window?.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full md:w-auto"
    >
      Print
    </button>
  );
};
export default PrintButton;
