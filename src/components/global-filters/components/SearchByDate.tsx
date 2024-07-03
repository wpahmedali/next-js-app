import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { Fragment } from 'react';
import { useRouterParams } from 'src/hooks/router-params';
import DateFieldItem from './search-item/DateFieldItem';

const SearchByDate = ({
  handleOnKeyDown,
  updateFilters,
  resetToggle,
  dropdownState,
  setDropdownState,
}) => {
  const router: NextRouter = useRouter();

  const params = useRouterParams(router.query);

  return (
    <Fragment>
      <DateFieldItem
        handleOnKeyDown={handleOnKeyDown}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
        value={params.purchaseFromDate}
        name="purchaseDateFrom"
        placeholder="Purchase Date From"
      />
      <DateFieldItem
        handleOnKeyDown={handleOnKeyDown}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
        value={params.purchaseToDate}
        name="purchaseDateTo"
        placeholder="Purchase Date To"
      />
    </Fragment>
  );
};

export default SearchByDate;
