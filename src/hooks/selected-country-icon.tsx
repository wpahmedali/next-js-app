import { NextRouter, useRouter } from 'next/router';
import { useCountry } from 'react-query/hooks/api/country';
import { getCountryIcon } from 'utils/get-country-icon';
import { useSubCountryList } from 'react-query/hooks/api/sub-country-list';
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
  const { data: subCountryData, isSuccess: subCountryIsSuccess } =
    useSubCountryList(params.pCountryId || params.countryId);

  let countryIcon = <GlobeAltIcon className="w-6 h-6" />;
  if (!cisLoading && !cisError) {
    let selectedCountryicon = null;
    selectedCountryicon = cdata?.data?.find(
      (x) => x.id === Number(params.countryId)
    );

    if (!selectedCountryicon && subCountryIsSuccess) {
      selectedCountryicon = subCountryData?.data?.find(
        (x) => x.id === Number(params.countryId)
      );
    }
    if (selectedCountryicon) {
      countryIcon = getCountryIcon(selectedCountryicon.cssClass);
    }
  }
  return countryIcon;
};
