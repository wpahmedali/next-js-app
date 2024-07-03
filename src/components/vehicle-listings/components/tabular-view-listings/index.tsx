import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import SpecialTabularListing from './components/SpecialListing';
import SimpleTabularListing from './components/SimpleListing';
import DubaiSpecialTabularListing from './components/DubaiSpecialListing';

const TabularViewListings = () => {
  const {
    query: { vehicles, special },
  }: NextRouter = useRouter();

  if (vehicles) {
    return <SpecialTabularListing />;
  } else if (special) {
    return <DubaiSpecialTabularListing />;
  } else {
    return <SimpleTabularListing />;
  }
};

export default TabularViewListings;
