import { NextRouter, useRouter } from 'next/router';
import { useCountry } from 'react-query/hooks/api/country';
import { getCountryIcon } from 'utils/get-country-icon';
import { usePhilippineCountryList } from 'react-query/hooks/api/philippine-country-list';
import { philippineCountry } from 'src/common/constants';
import { useRouterParams } from './router-params';

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

  let countryIcon = <></> || null;
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
    if (params.countryId === 0) {
      countryIcon = null;
    }
  }
  return countryIcon;
};
