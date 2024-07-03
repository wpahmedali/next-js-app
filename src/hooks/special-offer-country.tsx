import { NextRouter, useRouter } from 'next/router';
import { useCountry } from '../react-query/hooks/api/country';
import { useEffect, useState } from 'react';
import { getIdFromParam } from 'utils/get-id-from-param';
import { getCountryIcon } from 'utils/get-country-icon';

export interface ISpecialOfferCountry {
  isOffer: boolean;
  countryName: string;
  offerCount: number;
  flagIcon: JSX.Element;
}

export const useSpecialOfferCountry = (): ISpecialOfferCountry => {
  const [specialOffer, setSpecialOffer] = useState<ISpecialOfferCountry>({
    isOffer: false,
    countryName: '',
    offerCount: 0,
    flagIcon: <></>,
  });

  const { data, isLoading, isSuccess } = useCountry();

  const router: NextRouter = useRouter();
  const { country } = router.query;

  useEffect(() => {
    if (isSuccess) {
      const countryId =
        country && !Array.isArray(country) ? getIdFromParam(country) : 0;

      const currentCountry = data.data?.find(
        (country) => country.id === countryId
      );

      if (currentCountry && currentCountry.specialOffer) {
        setSpecialOffer((val) => ({
          ...val,
          isOffer: true,
          countryName: currentCountry.countryName,
          offerCount: currentCountry.specialOfferTotal,
          flagIcon: getCountryIcon(currentCountry.cssClass),
        }));
      } else {
        setSpecialOffer((val) => ({
          ...val,
          isOffer: false,
          countryName: '',
          offerCount: 0,
          flagIcon: <></>,
        }));
      }
    }
  }, [isLoading, router, country, isSuccess, data]);

  return specialOffer;
};
