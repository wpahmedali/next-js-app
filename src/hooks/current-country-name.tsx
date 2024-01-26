import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuction } from 'react-query/hooks/api/auction';
import { useCountry } from 'react-query/hooks/api/country';
import { usePhilippineCountryList } from 'react-query/hooks/api/philippine-country-list';
import { philippineCountry } from 'src/common/constants';
import { useRouterParams } from './router-params';

export const useCurrentCountryName = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const { query }: NextRouter = useRouter();

  const params = useRouterParams(query);

  const { data: auctionData } = useAuction(params.countryId);
  const { data: countryData } = useCountry();
  const { data: philippineCountryData } = usePhilippineCountryList(
    philippineCountry.id
  );

  useEffect(() => {
    if (params.auctionId && !Array.isArray(params.auctionId) && auctionData) {
      const findAuction = auctionData.data.find(
        (auction) => auction.auctionId === params.auctionId
      );
      const auctionCountry = `${findAuction?.auctionShortName}(${findAuction?.auctionDate})`;
      setSelectedCountry(auctionCountry);
    } else if (params.countryId && countryData) {
      const findCountry = countryData.data.find(
        (x) => x.id === Number(params.countryId)
      );

      if (findCountry) {
        setSelectedCountry(findCountry.countryName);
      } else {
        const findPCountry = philippineCountryData?.data?.find(
          (x) => x.id === Number(params.countryId)
        );

        if (findPCountry) {
          setSelectedCountry(findPCountry.countryName);
        }
      }
    } else {
      setSelectedCountry('Global');
    }
  }, [
    philippineCountryData,
    params.countryId,
    params.auctionId,
    auctionData,
    countryData,
  ]);

  return selectedCountry;
};
