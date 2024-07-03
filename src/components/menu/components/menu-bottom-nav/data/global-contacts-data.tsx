import { useCountry } from 'react-query/hooks/api/country';
import { IDropdownItem } from '../interfaces/dropdown-item.interface';
import { getCountryIcon } from 'utils/get-country-icon';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { IDropdownData } from '../interfaces/dropdown-data.interface';
import { ROUTES } from 'src/common/routes';
import { siteSettings } from 'utils/siteSetting';
import { useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';

const GetGlobalContactsData = (): IDropdownData => {
  const { query } = useRouter();
  const { countryId, countryList } = useRouterParams(query);
  const { data, isLoading, isError, isSuccess } = useCountry();
  const { defaultCountryShown } = siteSettings;

  if (isLoading || isError || !data?.data || data.data.length === 0) {
    return {
      data: [],
      isLoading,
      isError: true,
      isSuccess,
    };
  }

  let countries: IDropdownItem[] = data.data.map((item) => ({
    id: item.id,
    name: item.countryName,
    description: '',
    href: `${ROUTES.COUNTRY_CAR_LIST}/${item.countryName.toLowerCase()}-${
      item.id
    }?contact=true`,
    icon: getCountryIcon(item.cssClass),
  }));

  const countriesList = countryList?.find(
    (x) => x.countryId === countryId
  )?.countriesToBeShown;

  if (defaultCountryShown && countriesList?.length > 0) {
    countries = countries.filter((item) => countriesList.includes(item.id));
  }

  if (defaultCountryShown && !(countriesList?.length > 0) && countryId) {
    countries = countries.filter((item) => item.id === countryId);
  }

  const isGlobalShow =
    (defaultCountryShown && !countryId) ||
    (!defaultCountryShown && !(countriesList?.length > 0)) ||
    (!defaultCountryShown && countriesList?.length > 0);

  const globalContact = isGlobalShow && {
    id: 0,
    name: 'Global',
    description: '',
    href: `${ROUTES.ALL_STOCK}?contact=true`,
    icon: <GlobeAltIcon className="w-6 h-6" />,
  };

  const countriesData = [globalContact, ...countries].filter(Boolean);

  return {
    data: countriesData,
    isLoading,
    isError,
    isSuccess,
  };
};

export default GetGlobalContactsData;
