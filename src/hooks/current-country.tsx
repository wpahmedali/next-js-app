import { useRouter } from 'next/router';
import { useCountry } from '../react-query/hooks/api/country';
import { useEffect, useState } from 'react';
import { getCountryIcon } from 'utils/get-country-icon';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { ICurrentCountry } from 'src/interfaces/current-country.interface';
import { useRouterParams } from './router-params';

export const useCurrentCountry = (
  specificCountryId?: number
): ICurrentCountry => {
  const [currentCountry, setCurrentCountry] = useState<ICurrentCountry>({
    isSuccess: false,
    isDelivered: 1,
    countryName: '',
    flagIcon: <></>,
  });
  const { query } = useRouter();
  let { countryId } = useRouterParams(query);

  if (specificCountryId) {
    countryId = specificCountryId;
  }

  const { data, isSuccess } = useCountry();

  useEffect(() => {
    if (isSuccess) {
      let currentCountry = data.data.find(
        (country) => country.id === countryId
      );

      currentCountry
        ? setCurrentCountry({
            isSuccess: true,
            id: currentCountry.id,
            isDelivered: currentCountry.showReservedTag,
            isCount: currentCountry.is_count,
            isAuctionSheetDisplay: currentCountry.isAuctionSheetDisplay,
            countryName: currentCountry.countryName,
            FBPageName: currentCountry.FBPageName,
            FBAppId: currentCountry.FBAppId,
            isPriceDisplay: currentCountry.isPriceDisplay,
            flagIcon: getCountryIcon(currentCountry.cssClass),
          })
        : setCurrentCountry({
            isSuccess: true,
            countryName: 'Global',
            flagIcon: <GlobeAltIcon className="w-6 h-6" />,
          });
    }
  }, [countryId, data]);

  return currentCountry;
};
