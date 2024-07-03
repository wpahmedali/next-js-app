import React from 'react';
import BranchesContactsDropdown from '../branches-contacts-dropdown';
import GetGlobalStockData from 'components/menu/components/menu-bottom-nav/data/global-stock-data';

const Branches = () => {
  const { data, isLoading, isError, isSuccess } = GetGlobalStockData();

  return (
    <BranchesContactsDropdown
      name="Branches"
      data={data}
      isLoading={isLoading}
      isError={!data || isError}
      isSuccess={isSuccess}
    />
  );
};

export default Branches;
