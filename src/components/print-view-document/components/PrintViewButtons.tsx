import React from 'react';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const PrintViewButtons = ({
  data,
  handleSelectAll,
  checkAll,
  setCheckAll,
  handleDeleteSelected,
}: {
  data: IVehicleDetail[];
  handleSelectAll: (check: boolean) => void;
  checkAll: boolean;
  setCheckAll: any;
  handleDeleteSelected: () => void;
}) => {
  const handlePrint = () => {
    window?.print();
  };

  const downloadExcel = async () => {
    try {
      const XLSX = await import('xlsx');
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Cars');
      XLSX.writeFile(workbook, 'cars-list.xlsx');
    } catch (error) {
      console.error('Error downloading Excel:', error);
    }
  };

  return (
    <div className="flex justify-end my-2">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={downloadExcel}
          className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
        >
          Download List
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
        >
          Print List
        </button>

        <button
          type="button"
          onClick={handleDeleteSelected}
          className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
        >
          Delete Selected
        </button>

        <div className="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            onChange={() => {
              if (!checkAll) {
                handleSelectAll(true);
              } else {
                handleSelectAll(false);
              }
              setCheckAll((prevCheckAll) => !prevCheckAll);
            }}
            checked={checkAll}
            value="c"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Select All
          </label>
        </div>
      </div>
    </div>
  );
};

export default PrintViewButtons;
