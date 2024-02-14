import { NextRouter, useRouter } from 'next/router';
import { useCountry } from '../react-query/hooks/api/country';
import { useEffect, useState } from 'react';
import { usePhilippineCountryList } from 'react-query/hooks/api/philippine-country-list';
import { philippineCountry } from 'src/common/constants';
import { useRouterParams } from './router-params';

export const useIsAuctionCountry = (countryId?: number): boolean => {
  const [isAuctionCountry, setIsAuctionCountry] = useState(false);

  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);

  if (countryId) {
    params.countryId = countryId;
  }

  const { data, isSuccess } = useCountry();

  const { data: philippineCountryData, isSuccess: philippineCountryIsSuccess } =
    usePhilippineCountryList(philippineCountry.id);

  useEffect(() => {
    if (isSuccess && data && philippineCountryData) {
      let currentCountry = null;
      currentCountry = data.data.find(
        (country) => country.id === params.countryId
      );

      if (!currentCountry && philippineCountryIsSuccess) {
        currentCountry = philippineCountryData.data.find(
          (x) => x.id === Number(params.countryId)
        );
      }
      if (currentCountry && currentCountry.auctionDisplay) {
        setIsAuctionCountry(true);
      } else {
        setIsAuctionCountry(false);
      }
    }
  }, [params.countryId, philippineCountryIsSuccess, isSuccess, data, router]);

  return isAuctionCountry;
};
