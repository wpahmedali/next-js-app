import { useCountry } from 'react-query/hooks/api/country';
import { IDropdownItem } from '../interfaces/dropdown-item.interface';
import { getCountryIcon } from 'utils/get-country-icon';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { IDropdownData } from '../interfaces/dropdown-data.interface';
import { ROUTES } from 'src/common/routes';

const GetGlobalContactsData = (): IDropdownData => {
  const { data, isLoading, isError, isSuccess } = useCountry();

  if (isLoading || isError || data?.data?.length === 0) {
    return {
      data: [],
      isLoading,
      isError: true,
      isSuccess,
    };
  }

  const countries: IDropdownItem[] = data?.data?.map((item) => ({
    name: item.countryName,
    description: '',
    href: `${ROUTES.COUNTRY_CAR_LIST}/${item.countryName.toLowerCase()}-${
      item.id
    }?contact=true`,
    icon: getCountryIcon(item.cssClass),
  }));

  const countriesData = [
    {
      name: 'Global',
      description: '',
      href: ROUTES.ALL_STOCK + '?contact=true',
      icon: <GlobeAltIcon className="w-6 h-6" />,
    },
    ...countries,
  ];

  return {
    data: countriesData,
    isLoading,
    isError,
    isSuccess,
  };
};

export default GetGlobalContactsData;
