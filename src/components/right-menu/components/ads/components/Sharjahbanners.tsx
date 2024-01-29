import { sharjahCountry } from 'components/tyre-dashboard/common/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTyreSharjah } from 'react-query/hooks/api/tyres/sharjah/tyre';

const SharjahBanners = (): JSX.Element => {
  const { data } = useTyreSharjah(sharjahCountry.id);

  return (
    <div className="mb-1 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
      <Link
        href={
          data?.data?.incommingtAuctionDate?.length > 0
            ? `/used-tyres/sharjah/available/${data.data.incommingtAuctionDate[0].id}`
            : '/used-tyres/sharjah'
        }
      >
        <Image
          className="sm:w-full"
          src="/asset/images/ads/tyre-pro-ad.jpg"
          width={400}
          height={101}
          alt="tyre-pro-ad"
        />
      </Link>
    </div>
  );
};

export default SharjahBanners;
