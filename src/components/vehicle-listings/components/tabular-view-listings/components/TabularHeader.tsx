import React from 'react';

const TabularHeader = () => {
  return (
    <thead className="bg-primary border-none">
      <tr>
        <th className="border border-white p-2 text-xs text-center" colSpan={4}>
          Vehicle details
        </th>
        <th className="border border-white p-2 text-xs">chassis No.</th>
        <th className="border border-white p-2 text-xs">Color</th>
        <th className="border border-white p-2 text-xs">Year / Engine</th>
        <th className="border border-white p-2 text-xs">Stock no.</th>
        <th className="border border-white p-2 text-xs">Mileage / Trans</th>
      </tr>
    </thead>
  );
};

export default TabularHeader;
