import { NextRouter, useRouter } from 'next/router';
import { useCountry } from 'react-query/hooks/api/country';
import { getCountryIcon } from 'utils/get-country-icon';
import { usePhilippineCountryList } from 'react-query/hooks/api/philippine-country-list';
import { philippineCountry } from 'src/common/constants';
import { useRouterParams } from './router-params';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export const useSelectedCountryIcon = () => {
  const { query }: NextRouter = useRouter();
  const params = useRouterParams(query);

  const {
    data: cdata,
    isLoading: cisLoading,
    isError: cisError,
  } = useCountry();
  const { data: philippineCountryData, isSuccess: philippineCountryIsSuccess } =
    usePhilippineCountryList(philippineCountry.id);

  let countryIcon = <GlobeAltIcon className="w-6 h-6" />;
  if (!cisLoading && !cisError) {
    let selectedCountryicon = null;
    selectedCountryicon = cdata?.data?.find(
      (x) => x.id === Number(params.countryId)
    );

    if (!selectedCountryicon && philippineCountryIsSuccess) {
      selectedCountryicon = philippineCountryData?.data?.find(
        (x) => x.id === Number(params.countryId)
      );
    }
    if (selectedCountryicon) {
      countryIcon = getCountryIcon(selectedCountryicon.cssClass);
    }
  }
  return countryIcon;
};
