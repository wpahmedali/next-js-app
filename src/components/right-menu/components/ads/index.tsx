import React from 'react';
import { useSetContext } from 'src/providers/ModelContext';
import Image from 'next/image';
import ZambiaBanners from './components/Zambiabanners';
import SharjahBanners from './components/Sharjahbanners';
import SpecialOfferBanner from 'components/special-offers/banner';
import { FBAppId, FBPageName } from 'src/common/constants';
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
      <SharjahBanners />

      <div className="w-full 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
        <iframe
          src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${
            currentCountry?.FBPageName || FBPageName
          }&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=${
            currentCountry?.FBAppId || FBAppId
          }`}
          width="100%"
          height="900"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Ads;
