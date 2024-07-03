import Loading from 'components/loading';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import { useFetchDemandCars } from 'react-query/hooks/api/demand-car';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { useRouterParams } from 'src/hooks/router-params';
import { useSelectedCountryIcon } from 'src/hooks/selected-country-icon';

const DemandCars = () => {
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);

  const countryIcon = useSelectedCountryIcon();
  const selectedCountry = useCurrentCountryName();

  const { data, isLoading, isPreviousData } = useFetchDemandCars(
    params.countryId,
    params.purchaseFromDate,
    params.purchaseToDate
  );

  return (
    <div>
      <div>
        <h1 className="text-xl color-black font-semibold border-zinc-300 pb-2 mt-2 flex">
          <span className="flex items-center mr-2">{countryIcon}</span>
          <span className="flex items-center">
            Demand Cars( {selectedCountry} )
          </span>
        </h1>
      </div>
      {(isLoading || isPreviousData) && <Loading />}
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <div className="table-container">
            {data?.data?.map((item, index) => (
              <div key={index} className="table-wrapper">
                <table className="min-w-full bg-white border">
                  <thead>
                    <tr>
                      <th
                        colSpan={2}
                        className="bg-green-600 text-white px-4 py-2"
                      >
                        {item.countryName}
                      </th>
                    </tr>
                    <tr>
                      <th className="bg-black text-white px-4 py-2">Name</th>
                      <th className="bg-black text-white px-4 py-2">Pur</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item?.modelData?.map((modeldata, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{modeldata.name}</td>
                        <td className="border px-4 py-2">{modeldata.pur}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="bg-green-600 text-white font-bold px-4 py-2">
                        TOTAL
                      </td>
                      <td className="bg-green-600 text-white font-bold px-4 py-2">
                        {item.total}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandCars;
