import React, { Fragment } from 'react';
import MobileFilterView from './components/filter-views/MobileFilterView';
import WebFilterView from './components/filter-views/WebFilterView';

const GlobalFilters = () => {
  return (
    <Fragment>
      <WebFilterView />
    </Fragment>
  );
};

export default GlobalFilters;
