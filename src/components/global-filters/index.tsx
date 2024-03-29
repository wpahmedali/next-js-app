import React from 'react';
import FiltersSearch from './components/filter-views/FiltersSearch';

const GlobalFilters = () => {
  return (
    <div className="max-w-full 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
      <FiltersSearch />
    </div>
  );
};

export default GlobalFilters;
