import GetGlobalContactsData from '../../../data/global-contacts-data';
import Dropdown from './dropdown';

const GlobalContact = (): JSX.Element => {
  const globalContactsData = GetGlobalContactsData();

  return (
    <Dropdown
      data={globalContactsData}
      title="Global Contacts"
      tabName="global-contact"
    />
  );
};

export default GlobalContact;
