import React from 'react';
import { useSetContext } from 'src/providers/ModelContext';
import Image from 'next/image';
import ZambiaBanners from './components/Zambiabanners';
import SharjahBanners from './components/Sharjahbanners';
import SpecialOfferBanner from 'components/special-offers/banner';
import { uaeCountry } from 'src/common/constants';
import { useCurrentCountry } from 'src/hooks/current-country';

const Ads = (): JSX.Element => {
  const setContext = useSetContext();
  const currentCountry = useCurrentCountry();

  return (
    <div className="ads">
      <div className="max-w-full 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
        <button onClick={() => setContext('signUp')} className="w-full">
          <Image
            className="w-full"
            src="/asset/images/ads/create-account-ad.jpg"
            width={400}
            height={300}
            alt="create-account-ad"
          />
        </button>
      </div>
      <SpecialOfferBanner />
      <ZambiaBanners />
      {currentCountry?.id === uaeCountry.id && <SharjahBanners />}
    </div>
  );
};

export default Ads;
