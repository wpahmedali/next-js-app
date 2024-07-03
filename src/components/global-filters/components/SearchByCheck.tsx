import React from 'react';
import CheckBoxItem from './search-item/CheckBoxItem';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';

const SearchByCheck = ({
  updateFilters,
  resetToggle,
  dropdownState,
  setDropdownState,
}) => {
  const router: NextRouter = useRouter();

  const params = useRouterParams(router.query);

  return (
    <div className="w-full xs:w-full xxs:w-full px-2 place-items-center 2xl:mb-2 lg:mb-2 md:mb-2 sm:mb-2 xs:mb-2 xxs:mb-2">
      <div className="flex w-full h-8 overflow-hidden gap-2">
        <CheckBoxItem
          updateFilters={updateFilters}
          resetToggle={resetToggle}
          dropdownState={dropdownState}
          setDropdownState={setDropdownState}
          value={params.etaCrossed}
          name="ETACrossed"
          lable="ETA Crossed"
        />
        <CheckBoxItem
          updateFilters={updateFilters}
          resetToggle={resetToggle}
          dropdownState={dropdownState}
          setDropdownState={setDropdownState}
          value={params.dutyPaid}
          name="dutyPaid"
          lable="Duty Paid"
        />
        <CheckBoxItem
          updateFilters={updateFilters}
          resetToggle={resetToggle}
          dropdownState={dropdownState}
          setDropdownState={setDropdownState}
          value={params.noInspection}
          name="noInspection"
          lable="No Inspection"
        />
      </div>
    </div>
  );
};

export default SearchByCheck;
