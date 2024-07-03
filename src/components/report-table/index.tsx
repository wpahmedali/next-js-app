import React from 'react';
import YearList from './components/YearList';
import MakerListing from './components/MakerListing';

const ReportTable = ({ type }: { type: string }) => {
  return (
    <div className="border border-gray-400 p-4 rounded-md mb-4">
      <h1 className="text-xl font-bold mb-4">
        {type === 'inventory' ? 'Summary Report' : 'Mukechi Summary Report'}
      </h1>
      <div className="h-[650px] overflow-x-auto overflow-y-auto 3xl:w-[1270px] 2xl:w-[934px] lg:w-[934px] md:w-[389px] sm:w-full xs:w-full xxs:w-full relative">
        <table className="w-auto bg-white border summerreport">
          <YearList />
          <MakerListing type={type} />
        </table>
      </div>
    </div>
  );
};

export default ReportTable;
