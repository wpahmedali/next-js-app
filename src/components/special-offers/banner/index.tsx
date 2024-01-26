import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSpecialOfferCountry } from 'src/hooks/special-offer-country';

const SpecialOfferBanner = () => {
  const { isOffer } = useSpecialOfferCountry();
  const {
    query: { country },
  } = useRouter();

  return isOffer ? (
    <Link href={`/special-offer/vehicles/${country}/1`}>
      <Image
        className="sm:w-full"
        src="/asset/images/ads/special-offer.gif"
        width={300}
        height={101}
        alt="sdf"
      />
    </Link>
  ) : (
    <></>
  );
};

export default SpecialOfferBanner;
