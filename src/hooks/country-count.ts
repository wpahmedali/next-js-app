import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCountry } from 'react-query/hooks/api/country';
import { useRouterParams } from './router-params';

export const useCountryCount = (): boolean => {
  const [countryCount, setCountryCount] = useState(false);
  const { query }: NextRouter = useRouter();
  const params = useRouterParams(query);

  const { data, isSuccess } = useCountry();

  useEffect(() => {
    if (params.countryId !== null && isSuccess) {
      const findCountry = data.data.find(
        (country) => country.id === Number(params.countryId)
      );
      if (findCountry) {
        setCountryCount(findCountry.is_count);
      } else if (params.countryId === 0) {
        setCountryCount(true);
      }
    }
  }, [isSuccess, params.countryId]);

  return countryCount;
};
