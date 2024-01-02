import { useRouter } from 'next/router';
import { useCountry } from '../react-query/hooks/api/country';
import { useEffect, useState } from 'react';
import { getIdFromParam } from 'utils/get-id-from-param';
import { getCountryIcon } from 'utils/get-country-icon';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export interface ICurrentCountry {
  isSuccess: boolean;
  countryName: string;
  flagIcon: JSX.Element;
}

export const useCurrentCountry = (): ICurrentCountry => {
  const [currentCountry, setCurrentCountry] = useState<ICurrentCountry>({
    isSuccess: false,
    countryName: '',
    flagIcon: <></>,
  });

  const { data, isLoading, isSuccess } = useCountry();

  const {
    query: { country },
  } = useRouter();

  useEffect(() => {
    if (isSuccess) {
      const countryId =
        country && !Array.isArray(country) ? getIdFromParam(country) : 0;

      const currentCountry = data.data.find(
        (country) => country.id === countryId
      );

      currentCountry
        ? setCurrentCountry({
            isSuccess: true,
            countryName: currentCountry.countryName,
            flagIcon: getCountryIcon(currentCountry.cssClass),
          })
        : setCurrentCountry({
            isSuccess: true,
            countryName: 'Global',
            flagIcon: <GlobeAltIcon className="w-6 h-6" />,
          });
    }
  }, [isLoading, country, isSuccess, data]);

  return currentCountry;
};
