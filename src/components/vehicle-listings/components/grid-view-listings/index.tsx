import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import SpecialGridListing from './components/SpecialListing';
import SimpleGridListing from './components/SimpleListing';
import DubaiSpecialGridListing from './components/DubaiSpecialListing';

const GridViewListings = () => {
  const {
    query: { vehicles, special },
  }: NextRouter = useRouter();

  if (vehicles) {
    return <SpecialGridListing />;
  } else if (special) {
    return <DubaiSpecialGridListing />;
  } else {
    return <SimpleGridListing />;
  }
};

export default GridViewListings;
