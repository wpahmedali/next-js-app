import React from 'react';
import Link from 'next/link';
import { ROUTES } from 'src/common/routes';
import { getCountryIcon } from 'utils/get-country-icon';
import { useIsAuctionCountry } from 'src/hooks/auction-country';
import { IPhilippineCountryList } from 'src/interfaces/philippine-country-list.interface';

const ButtonItem = ({ item }: { item: IPhilippineCountryList }) => {
  const isAuctionCountry = useIsAuctionCountry(item.id);

  let url = `${ROUTES.COUNTRY_CAR_LIST}/${item.countryName.toLowerCase()}-${
    item.id
  }/1`;

  if (isAuctionCountry) {
    url = `${ROUTES.AUCTION}/${item.auctionShortName.toLowerCase()}-${
      item.auctionId
    }/${item.id}/1`;
  }

  return (
    <Link href={url}>
      <div className="content-center justify-center text-center w-full 2xl:my-1 lg:my-1 md:my-2 sm:my-2 xs:my-2 xxs:my-2">
        <div className="flex bg-gradient-to-r from-indigo-500 via-red-500 to-white border-2 border-blue-700 text-white font-bold items-center gap-x-2 p-3">
          {getCountryIcon(item.cssClass)} {item.countryName}
        </div>
      </div>
    </Link>
  );
};

export default ButtonItem;
