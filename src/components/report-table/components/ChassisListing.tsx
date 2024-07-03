import Loading from 'components/loading';
import React, { Fragment } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import { useChassisCodeSummaryReport } from 'react-query/hooks/api/summary-report/chassis-code-summary-report';

const ChassisListing = ({
  type,
  makerId,
  modelId,
}: {
  type: string;
  makerId: number;
  modelId: number;
}) => {
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);

  const { data, isLoading, isPreviousData } = useChassisCodeSummaryReport(
    String(params.countryId),
    type,
    String(makerId),
    String(modelId)
  );

  return (
    <Fragment>
      {(isLoading || isPreviousData) && <Loading />}
      {data?.data?.map((item, index) => (
        <tr key={index} className="!bg-black text-white">
          <th className="sticky-intersect py-2 px-4 !bg-black text-white">
            {item?.chassisCodeName}
          </th>

          {item?.years?.map((item, index) => (
            <td key={index} className="py-2 px-4 border text-white">
              {item.yearCount}
            </td>
          ))}
          <td className="py-2 px-4 border ">{item.grandTotal}</td>
          <td className="py-2 px-4 border ">{item.demond}</td>
        </tr>
      ))}
    </Fragment>
  );
};

export default ChassisListing;
