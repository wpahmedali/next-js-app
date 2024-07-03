import Loading from 'components/loading';
import React, { Fragment, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import { useModelSummaryReport } from 'react-query/hooks/api/summary-report/model-summary-report';
import ChassisListing from './ChassisListing';

const ModelListing = ({ type, makerId }: { type: string; makerId: number }) => {
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);

  const [modelId, setModelId] = useState<number>(null);

  const { data, isLoading, isPreviousData } = useModelSummaryReport(
    String(params.countryId),
    type,
    String(makerId)
  );

  return (
    <Fragment>
      {(isLoading || isPreviousData) && <Loading />}
      {data?.data?.map((item, index) => (
        <Fragment key={index}>
          <tr className="!bg-amber-100">
            <th className="sticky-intersect py-2 px-4 !bg-amber-100 text-black border">
              <button
                onClick={() =>
                  setModelId(modelId === item?.modelId ? null : item.modelId)
                }
                className="rounded-full p-1 px-3 font-bold items-center text-center text-black bg-[#fccf3a]"
              >
                {modelId !== item?.modelId ? '+' : '-'}
              </button>
              <span className=" ml-2 text-black">{item?.modelName}</span>
            </th>

            {item?.years?.map((item, index) => (
              <td key={index} className="py-2 px-4 border">
                {item.yearCount}
              </td>
            ))}
            <td className="py-2 px-4 border ">{item.grandTotal}</td>
            <td className="py-2 px-4 border ">{item.demond}</td>
          </tr>

          {modelId === item?.modelId && (
            <ChassisListing type={type} makerId={makerId} modelId={modelId} />
          )}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ModelListing;
