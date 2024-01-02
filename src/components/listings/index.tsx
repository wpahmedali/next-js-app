import React, { Fragment } from 'react';
import Heading from 'components/listings/components/Heading';
import GridViewListings from 'components/grid-view-listings';
import TabularViewListings from 'components/tabular-view-listings';
import { listingViews } from 'src/common/listing-views';
import { useVehicleListView } from 'src/providers/VehicleListView';
import AuctionButtons from 'components/auction-buttons';
import { useIsAuctionCountry } from 'src/hooks/auction-country';
import PhilippineButtons from 'components/philippine-buttons';
import { NextRouter, useRouter } from 'next/router';
import { useLoadingState } from 'src/providers/LoadingContext';
import { philippineCountry } from 'src/common/constants';
import { useVehicleListGrid } from 'react-query/hooks/api/vehicle-list-grid';
import PageLoader from 'components/page-loader';
import { useRouterParams } from 'src/hooks/router-params';

const Listings = () => {
  const loadingState = useLoadingState();
  const isAuctionCountry = useIsAuctionCountry();
  const view = useVehicleListView();
  const router: NextRouter = useRouter();

  const params = useRouterParams(router.query);

  const { isLoading, isPreviousData } = useVehicleListGrid(params);

  const isLoadingData =
    (isLoading || isPreviousData) &&
    (loadingState === 'gridLoader' || loadingState === 'countryLoading');

  return (
    <Fragment>
      <PageLoader isLoading={isLoadingData} />
      <main className="bg-light w-full min-h-screen">
        {philippineCountry && <PhilippineButtons />}
        {isAuctionCountry && <AuctionButtons />}
        <Heading />
        {view === listingViews.tabular ? (
          <TabularViewListings />
        ) : (
          <GridViewListings />
        )}
      </main>
    </Fragment>
  );
};

export default Listings;
