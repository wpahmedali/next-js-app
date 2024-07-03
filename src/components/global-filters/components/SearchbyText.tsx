import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { Fragment } from 'react';
import { useRouterParams } from 'src/hooks/router-params';
import TextFieldItem from './search-item/TextFieldItem';

const SearchByText = ({
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
      <TextFieldItem
        handleOnKeyDown={handleOnKeyDown}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
        value={params.engine}
        name="engine"
        placeholder="Search Engine CC"
      />
      <TextFieldItem
        handleOnKeyDown={handleOnKeyDown}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
        value={params.year}
        name="year"
        placeholder="Search Registration Year"
      />
      <TextFieldItem
        handleOnKeyDown={handleOnKeyDown}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
        value={params.stockNo}
        name="stockNo"
        placeholder="Search By Stock No"
      />
      <TextFieldItem
        handleOnKeyDown={handleOnKeyDown}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
        value={params.chassisNo}
        name="chassisNo"
        placeholder="Search By Chassis No"
      />
      <TextFieldItem
        handleOnKeyDown={handleOnKeyDown}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
        value={params.pdDays}
        name="PDDay"
        placeholder="PD Day"
      />
    </Fragment>
  );
};

export default SearchByText;
