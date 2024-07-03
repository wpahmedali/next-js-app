import React, { useState } from 'react';
import { Fragment } from 'react';
import Error from 'components/error';
import { NextRouter, useRouter } from 'next/router';
import { ROUTES } from 'src/common/routes';
import { useLoadingState } from 'src/providers/LoadingContext';
import PageLoader from 'components/page-loader';
import Pagination from 'components/pagination';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { useRouterParams } from 'src/hooks/router-params';
import { reactQuery } from 'src/common/constants';
import { useVehicleList } from 'react-query/hooks/api/vehicle/vehicle-list';
import TabularHeader from './components/TabularHeader';
import UpperSection from './components/UpperSection';
import LowerSection from './components/LowerSection';

const TabularViewListings = () => {
  const router: NextRouter = useRouter();
  const loadingState = useLoadingState();
  const selectedCountry = useCurrentCountryName();
  const [vehicleId, setVehicleId] = useState(null);

  const { country, auction, maker, model, bodyType } = router.query;
  const params = useRouterParams(router.query);

  const { data, isLoading, isError, isSuccess, isPreviousData } =
    useVehicleList(reactQuery.vehicleList.tabular, params);

  const baseUrl = country
    ? auction
      ? `${ROUTES.AUCTIONS}/${auction}/${country}`
      : `${ROUTES.USED_CAR}/${country}`
    : `${ROUTES.USED_CAR}${
        params.countryId
          ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
          : ROUTES.ALL_STOCK
      }`;

  return (
    <main className="bg-light w-full min-h-screen">
      {(!data || isError) && !isLoading && <Error />}
      <PageLoader isLoading={isLoading && loadingState === 'tabularLoader'} />
      {!isError && (
        <Fragment>
          <Pagination
            isLoading={isPreviousData || isLoading}
            data={data?.data.pagination}
          />
          {isSuccess && data && (
            <div className="flex justify-between my-2">
              <div className="table-list-main w-full 3xl:overflow-auto 2xl:overflow-auto lg:overflow-auto md:overflow-auto sm:overflow-scroll  xs:overflow-scroll xxs:overflow-scroll">
                {data.data.pagination.total === 0 ? (
                  <div className="my-5 text-red-600 text-center">
                    Data Not Found
                  </div>
                ) : (
                  <table className="table-auto border-collapse border border-slate-400 w-full">
                    <TabularHeader />
                    <tbody>
                      {data.data.carList.map((data, index) => (
                        <Fragment key={index}>
                          <UpperSection
                            isEven={index % 2 !== 0}
                            data={data}
                            url={`${baseUrl}/${
                              maker ? maker : data.makerName.toLowerCase()
                            }/${model ? model : data.modelName.toLowerCase()}${
                              auction ? `/car-detail` : ''
                            }/${data.carId}${
                              bodyType ? `?bodyType=${bodyType}` : ''
                            }`}
                          />
                          <LowerSection
                            isEven={index % 2 !== 0}
                            data={data}
                            url={`${baseUrl}/${
                              maker ? maker : data.makerName.toLowerCase()
                            }/${model ? model : data.modelName.toLowerCase()}${
                              auction ? `/car-detail` : ''
                            }/${data.carId}${
                              bodyType ? `?bodyType=${bodyType}` : ''
                            }`}
                            vehicleId={vehicleId}
                            setVehicleId={setVehicleId}
                          />
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
        </Fragment>
      )}
    </main>
  );
};

export default TabularViewListings;
