import React from 'react';
import { useSetContext } from 'src/providers/ModelContext';
import Image from 'next/image';
import ZambiaBanners from './components/Zambiabanners';
import SharjahBanners from './components/Sharjahbanners';
import SpecialOfferBanner from 'components/special-offers/banner';
import { uaeCountry } from 'src/common/constants';
import { useCurrentCountry } from 'src/hooks/current-country';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const Ads = ({ data }: { data: IVehicleDetail[] }): JSX.Element => {
  const setContext = useSetContext();
  const currentCountry = useCurrentCountry();

  return (
    <div className="ads">
      {data && data?.length < 1 && (
        <div className="max-w-full 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
          <button
            onClick={() => setContext('SET_VALUE', 'signUp')}
            className="w-full"
          >
            <Image
              className="w-full"
              src="/asset/images/ads/create-account-ad.jpg"
              width={400}
              height={300}
              alt="create-account-ad"
            />
          </button>
        </div>
      )}
      <SpecialOfferBanner />
      <ZambiaBanners />
      {currentCountry?.id === uaeCountry.id && <SharjahBanners />}
    </div>
  );
};

export default Ads;
