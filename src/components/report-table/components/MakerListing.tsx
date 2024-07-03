import React, { Fragment, useState } from 'react';
import Loading from 'components/loading';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import { useMakerSummaryReport } from 'react-query/hooks/api/summary-report/maker-summary-report';
import ModelListing from './ModelListing';

const MakerListing = ({ type }: { type: string }) => {
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);

  const [makerId, setMakerId] = useState<number>(null);

  const { data, isLoading, isPreviousData } = useMakerSummaryReport(
    String(params.countryId),
    type
  );

  return (
    <tbody>
      {(isLoading || isPreviousData) && <Loading />}
      {data?.data?.map((item, index) => (
        <Fragment key={index}>
          <tr className="bg-gray-200">
            <th className="sticky-intersect py-2 px-4 border">
              <button
                onClick={() =>
                  setMakerId(makerId === item?.makerId ? null : item?.makerId)
                }
                className="rounded-full p-1 px-3 font-bold items-center text-center text-black bg-[#fccf3a]"
              >
                {makerId !== item?.makerId ? '+' : '-'}
              </button>
              <span className=" ml-2">{item?.makerName}</span>
            </th>

            {item?.years?.map((item, index) => (
              <td key={index} className="py-2 px-4 border">
                {item.yearCount}
              </td>
            ))}
            <td className="py-2 px-4 border">{item.grandTotal}</td>
            <td className="py-2 px-4 border">{item.demond}</td>
          </tr>

          {makerId === item?.makerId && (
            <ModelListing type={type} makerId={makerId} />
          )}
        </Fragment>
      ))}
    </tbody>
  );
};

export default MakerListing;
