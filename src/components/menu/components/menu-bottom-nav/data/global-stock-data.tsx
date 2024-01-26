import { useCountry } from 'react-query/hooks/api/country';
import { IDropdownItem } from '../interfaces/dropdown-item.interface';
import { getCountryIcon } from 'utils/get-country-icon';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { IDropdownData } from '../interfaces/dropdown-data.interface';
import { ROUTES } from 'src/common/routes';
import { siteSettings } from 'utils/siteSetting';
import { useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';

const formatCountryItem = (item) => ({
  id: item.id,
  name: item.countryName,
  description: '',
  href: `${ROUTES.COUNTRY_CAR_LIST}/${item.countryName.toLowerCase()}-${
    item.id
  }/1`,
  icon: getCountryIcon(item.cssClass),
});

const GetGlobalStockData = (): IDropdownData => {
  const { query } = useRouter();
  const { countryId, isCountryFound } = useRouterParams(query);
  const { data, isLoading, isError, isSuccess } = useCountry();
  const { defaultCountryShown, specificCountriesShown, countryList } =
    siteSettings;

  if (isLoading || isError || !data?.data?.length) {
    return { data: [], isLoading, isError: true, isSuccess };
  }

  let countries: IDropdownItem[] = data.data.map(formatCountryItem);

  if (defaultCountryShown && isCountryFound) {
    countries = countries.filter((item) => item.id === countryId);
  }

  const countriesList = countryList?.find(
    (x) => x.countryId === countryId
  )?.countriesToBeShown;

  if (!defaultCountryShown && specificCountriesShown && countriesList) {
    countries = countries.filter((item) => countriesList.includes(item.id));
  }

  const globalContact = (!defaultCountryShown || !isCountryFound) && {
    id: 0,
    name: 'Global',
    description: '',
    href: `${ROUTES.ALL_STOCK}/1`,
    icon: <GlobeAltIcon className="w-6 h-6" />,
  };

  const countriesData = [globalContact, ...countries].filter(Boolean);

  return { data: countriesData, isLoading, isError, isSuccess };
};

export default GetGlobalStockData;
