import React from 'react';
import { useSetContext } from 'src/providers/ModelContext';
import Image from 'next/image';
import ZambiaBanners from './components/Zambiabanners';
import SharjahBanners from './components/Sharjahbanners';

const Ads = (): JSX.Element => {
  const setContext = useSetContext();

  return (
    <div className="ads">
      <div className="max-w-full 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
        <button onClick={() => setContext('signUp')}>
          <Image
            className="sm:w-full"
            src="/asset/images/ads/create-account-ad.jpg"
            width={300}
            height={300}
            alt="create-account-ad"
          />
        </button>
      </div>
      <ZambiaBanners />
      <SharjahBanners />
      <div className="max-w-full 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fviewas%3D100000686899395%26id%3D61554880415519&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=639792690488678"
          style={{
            width: '100%',
            height: '500px',
            border: 'none',
            overflow: 'hidden',
          }}
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Ads;
