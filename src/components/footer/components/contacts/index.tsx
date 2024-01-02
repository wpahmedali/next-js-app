import React from 'react';
import BranchesContactsDropdown from '../branches-contacts-dropdown';
import GetGlobalContactsData from 'components/menu/components/menu-bottom-nav/data/global-contacts-data';

const Contacts = () => {
  const { data, isLoading, isError, isSuccess } = GetGlobalContactsData();

  return (
    <BranchesContactsDropdown
      name="Contact Us"
      data={data}
      isLoading={isLoading}
      isError={!data || isError}
      isSuccess={isSuccess}
    />
  );
};

export default Contacts;
