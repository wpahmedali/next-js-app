import { NextRouter, useRouter } from 'next/router';
import { useCountry } from '../react-query/hooks/api/country';
import { useEffect, useState } from 'react';
import { useSubCountryList } from 'react-query/hooks/api/sub-country-list';
import { useRouterParams } from './router-params';

export const useIsAuctionCountry = (countryId?: number): boolean => {
  const [isAuctionCountry, setIsAuctionCountry] = useState(false);

  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);

  const { data, isSuccess } = useCountry();

  const { data: subCountryData, isSuccess: subCountryIsSuccess } =
    useSubCountryList(params.pCountryId || params.countryId);

  useEffect(() => {
    if (isSuccess && data && subCountryData) {
      let currentCountry = null;
      currentCountry = data.data?.find(
        (country) =>
          country.id ===
          (countryId !== undefined ? countryId : params.countryId)
      );

      if (
        (!currentCountry ||
          (currentCountry && !currentCountry.auctionDisplay)) &&
        subCountryIsSuccess
      ) {
        currentCountry = subCountryData.data?.find(
          (x) => x.id === Number(countryId || params.countryId)
        );
      }

      if (currentCountry && currentCountry.auctionDisplay) {
        setIsAuctionCountry(true);
      } else {
        setIsAuctionCountry(false);
      }
    }
  }, [params.countryId, subCountryIsSuccess, isSuccess, data, router]);

  return isAuctionCountry;
};
