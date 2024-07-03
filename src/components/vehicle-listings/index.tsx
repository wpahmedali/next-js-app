import React from 'react';
import { listingViews } from 'src/common/listing-views';
import { useVehicleListView } from 'src/providers/VehicleListView';
import Heading from './components/Heading';
import TabularViewListings from './components/tabular-view-listings';
import GridViewListings from './components/grid-view-listings';
import { useRouter } from 'next/router';
import { useModelState } from 'src/providers/ModelContext';
import ReportTable from 'components/report-table';

const Listings = () => {
  const { query } = useRouter();
  const view = useVehicleListView();
  const modelState = useModelState();

  return (
    <main className="bg-light w-full min-h-screen">
      <Heading />
      {modelState === 'SummaryReport' && <ReportTable type="inventory" />}
      {modelState === 'MukechiSummaryReport' && <ReportTable type="mukechi" />}
      {view === listingViews.tabular ? (
        <TabularViewListings />
      ) : (
        <GridViewListings />
      )}
    </main>
  );
};

export default Listings;
