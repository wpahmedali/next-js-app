import React, { Fragment } from 'react';
import { NextRouter, useRouter } from 'next/router';
import VehicleCard from 'components/grid-view-listings/components/vehicle-card';
import SeeMoreButton from 'components/grid-view-listings/components/SeeMoreButton';
import { useVehicleListGrid } from 'react-query/hooks/api/vehicle-list-grid';
import Error from 'components/error';
import { ROUTES } from 'src/common/routes';
import { gotoNewPage } from 'utils/goto-new-page';
import { GotoSecondPage } from 'utils/goto-second-page';
import {
  useDispatchLoadingState,
  useLoadingState,
} from 'src/providers/LoadingContext';
import PageLoader from 'components/page-loader';
import CountBar from './components/CountBar';
import { useSelectedCountry } from 'src/hooks/selected-country';
import { useRouterParams } from 'src/hooks/router-params';
import { vehiclePerPageList } from 'src/common/constants';

const GridViewListings = () => {
  const setLoadingState = useDispatchLoadingState();
  const loadingState = useLoadingState();
  const selectedCountry = useSelectedCountry();
  const router: NextRouter = useRouter();

  const {
    query: { page, country, auction, maker, model, bodyType },
  } = router;

  const params = useRouterParams(router.query);
  params.perPage = params.page * vehiclePerPageList;
  params.page = 1;

  const baseUrl = country
    ? auction
      ? `${ROUTES.AUCTIONS}/${auction}/${country}`
      : `${ROUTES.USED_CAR}/${country}`
    : `${ROUTES.USED_CAR}${
        params.countryId
          ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
          : ROUTES.ALL_STOCK
      }`;

  const { data, isLoading, isError, isSuccess, isPreviousData } =
    useVehicleListGrid(params);

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
          isLoading &&
          (loadingState === 'seeMoreLoader' || loadingState === 'gridLoader')
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
                    key={item.carId + i}
                  />
                ))}
              </div>
              {data?.data?.pagination?.totalPages > 1 &&
                data?.data?.pagination?.currentPage === params.page && (
                  <SeeMoreButton
                    isLoading={
                      isPreviousData && loadingState === 'seeMoreLoader'
                    }
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

export default GridViewListings;
