import React from 'react';
import { listingViews } from 'src/common/listing-views';
import { useVehicleListView } from 'src/providers/VehicleListView';
import AuctionButtons from 'components/auction-buttons';
import { useIsAuctionCountry } from 'src/hooks/auction-country';
import PhilippineButtons from 'components/philippine-buttons';
import { philippineCountry, uaeCountry } from 'src/common/constants';
import Heading from './components/Heading';
import TabularViewListings from './components/tabular-view-listings';
import GridViewListings from './components/grid-view-listings';
import DubaiSpecialStockButton from 'components/dubai-special-stock-button';
import { useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';

const Listings = () => {
  const { query } = useRouter();
  const { countryId } = useRouterParams(query);
  const isAuctionCountry = useIsAuctionCountry();
  const view = useVehicleListView();

  return (
    <main className="bg-light w-full min-h-screen">
      {countryId === philippineCountry.id && <PhilippineButtons />}
      {isAuctionCountry && <AuctionButtons />}
      {countryId === uaeCountry.id && <DubaiSpecialStockButton />}
      <Heading />
      {view === listingViews.tabular ? (
        <TabularViewListings />
      ) : (
        <GridViewListings />
      )}
    </main>
  );
};

export default Listings;
