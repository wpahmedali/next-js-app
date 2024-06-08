import React, { Fragment, useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import Error from 'components/error';
import { ROUTES } from 'src/common/routes';
import { gotoNewPage } from 'utils/goto-new-page';
import { GotoSecondPage } from 'utils/goto-second-page';
import {
  useDispatchLoadingState,
  useLoadingState,
} from 'src/providers/LoadingContext';
import PageLoader from 'components/page-loader';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { useRouterParams } from 'src/hooks/router-params';
import {
  reactQuery,
  vehicleListViews,
  vehiclePerPageList,
} from 'src/common/constants';
import SeeMoreButton from './SeeMoreButton';
import VehicleCard from './vehicle-card';
import CountBar from './CountBar';
import { useVehicleList } from 'react-query/hooks/api/vehicle-list';
import { useVehicleListView } from 'src/providers/VehicleListView';

const SimpleGridListing = () => {
  const setLoadingState = useDispatchLoadingState();
  const loadingState = useLoadingState();
  const selectedCountry = useCurrentCountryName();
  const router: NextRouter = useRouter();
  const view = useVehicleListView();

  const {
    query: { page, country, auction, maker, model, bodyType },
  } = router;

  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const params = useRouterParams(router.query);

  let pageNo: number;
  let perPage: number;

  if (
    view === vehicleListViews.s_grid &&
    isClient &&
    localStorage.getItem('pageNo') !== 'undefined'
  ) {
    const pageDif =
      params.page - JSON.parse(localStorage.getItem('pageNo')) + 1;

    perPage = pageDif > 0 ? pageDif * vehiclePerPageList : vehiclePerPageList;
    pageNo = params.page;
  } else {
    perPage = params.page * vehiclePerPageList;
    pageNo = 1;
  }

  params.perPage = perPage;
  params.page = pageNo;

  const { data, isLoading, isError, isSuccess, isPreviousData, isFetching } =
    useVehicleList(reactQuery.vehicleList.grid, params);

  const baseUrl = country
    ? auction
      ? `${ROUTES.AUCTIONS}/${auction}/${country}`
      : `${ROUTES.USED_CAR}/${country}`
    : `${ROUTES.USED_CAR}${
        params.countryId
          ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
          : ROUTES.ALL_STOCK
      }`;

  const seeMore = async () => {
    if (page && !Array.isArray(page)) {
      const nextPage = parseInt(page) + 1;
      gotoNewPage(router, nextPage);
    } else {
      GotoSecondPage(router, selectedCountry, params);
    }
    setLoadingState({ type: 'seeMoreLoader' });
  };

  return (
    <div className="w-full z-40">
      <PageLoader
        isLoading={
          (isLoading || isFetching) &&
          !isPreviousData &&
          (loadingState === 'seeMoreLoader' ||
            loadingState === 'countryLoading' ||
            loadingState === 'gridLoader')
        }
      />
      {(!data || isError) && !isLoading && <Error />}
      {isSuccess && (
        <Fragment>
          <CountBar data={data?.data?.pagination} />
          {data?.data?.pagination?.total === 0 ? (
            <div className="my-7 text-red-600 text-center">Data Not Found</div>
          ) : (
            <Fragment>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-2 2xl:grid-cols-4 xl:grid-cols-3">
                {data?.data?.carList.map((item, i) => (
                  <VehicleCard
                    url={`${baseUrl}/${
                      maker ? maker : item.makerName.toLowerCase()
                    }/${model ? model : item.modelName.toLowerCase()}${
                      auction ? `/car-detail` : ''
                    }/${item.carId}${bodyType ? `?bodyType=${bodyType}` : ''}`}
                    data={item}
                    key={i}
                  />
                ))}
              </div>
              {data?.data?.pagination?.totalPages > 1 && (
                // data?.data?.pagination?.currentPage === params.page && (
                <SeeMoreButton
                  isLoading={isPreviousData && loadingState === 'seeMoreLoader'}
                  seeMore={seeMore}
                />
              )}
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default SimpleGridListing;
