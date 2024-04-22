import { useRouter } from 'next/router';
import { useCountry } from '../react-query/hooks/api/country';
import { useEffect, useState } from 'react';
import { getCountryIcon } from 'utils/get-country-icon';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { ICurrentCountry } from 'src/interfaces/current-country.interface';
import { useRouterParams } from './router-params';
import { useSubCountryList } from 'react-query/hooks/api/sub-country-list';

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
  let { countryId, pCountryId } = useRouterParams(query);

  if (specificCountryId) {
    countryId = specificCountryId;
  }

  const { data, isSuccess } = useCountry();
  const { data: subCountryData, isSuccess: subCountryIsSuccess } =
    useSubCountryList(pCountryId || countryId);

  useEffect(() => {
    if (isSuccess) {
      let currentCountry = data.data?.find(
        (country) => country.id === countryId
      );

      if (
        (!currentCountry ||
          (currentCountry && !currentCountry.auctionDisplay)) &&
        pCountryId &&
        subCountryIsSuccess
      ) {
        currentCountry = subCountryData?.data?.find(
          (country) => country.id === countryId
        );
      }

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
            subCountry: currentCountry.subCountry,
            flagIcon: getCountryIcon(currentCountry.cssClass),
            whatsappNumber: currentCountry.whatsappNumber,
          })
        : setCurrentCountry({
            isSuccess: true,
            countryName: 'Global',
            flagIcon: <GlobeAltIcon className="w-6 h-6" />,
          });
    }
  }, [subCountryData, countryId, data]);

  return currentCountry;
};
