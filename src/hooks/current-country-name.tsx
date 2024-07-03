import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCountry } from 'react-query/hooks/api/country';
import { useRouterParams } from './router-params';

export const useCurrentCountryName = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const { query }: NextRouter = useRouter();

  const params = useRouterParams(query);

  const { data: countryData } = useCountry();

  useEffect(() => {
    if (params.countryId && countryData) {
      const findCountry = countryData.data.find(
        (x) => x.id === Number(params.countryId)
      );

      if (findCountry) {
        setSelectedCountry(findCountry.countryName);
      }
    } else {
      setSelectedCountry('Global');
    }
  }, [params.countryId, countryData]);

  return selectedCountry;
};
