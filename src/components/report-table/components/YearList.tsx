import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import { useYearList } from 'react-query/hooks/api/year-list';

const YearList = () => {
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);

  const { data } = useYearList(String(params.countryId));

  return (
    <thead className="bg-gray-800 text-white sticky top-0">
      <tr>
        <th className="sticky-intersect py-2 px-4 border">Label</th>
        {data?.data?.map((item, index) => (
          <th key={index} className="py-2 px-4 border">
            {item.year}
          </th>
        ))}
        <th className="py-2 px-4 border">Grand Total</th>
        <th className="py-2 px-4 border">Demand</th>
      </tr>
    </thead>
  );
};

export default YearList;
