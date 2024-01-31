import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Ads from 'components/right-menu/components/ads';
import CountryToggleMenu from 'components/right-menu/components/CountryToggleMenu';
import TopShowedCountry from 'components/right-menu/components/TopShowedCountry';
import { siteSettings } from 'utils/siteSetting';
import { useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import EmbeddedFB from './components/EmbeddedFB';

const RightMenu = (): JSX.Element => {
  const { query } = useRouter();
  const { countryId } = useRouterParams(query);
  const { defaultCountryShown, countryList } = siteSettings;

  const countriesList = countryList?.find(
    (x) => x.countryId === countryId
  )?.countriesToBeShown;

  const showSwitchButton =
    (defaultCountryShown && !countryId) ||
    (!defaultCountryShown && countriesList?.length > 0) ||
    (!defaultCountryShown && !(countriesList?.length > 0)) ||
    (defaultCountryShown && countriesList?.length > 0);

  return (
    <div className="xxs:w-full xs:w-full sm:w-full 2xl:w-[375px] xl:w-[375px] lg:w-[375px] md:w-[300px] flex-col">
      <div className="w-full">
        {/* <h2 className="flex text-sm font-normal leading-4 bg-primaryDark text-center text-white py-2 gap-2 px-2 md:text-xs">
          <GlobeAltIcon className="h-6 w-6 flex items-center" />
          <span className="flex items-center">All Country</span>
        </h2> */}
        <ul className="w-full rounded-lg mb-1 text-blue-800">
          <TopShowedCountry />
          {showSwitchButton && <CountryToggleMenu />}
        </ul>
        <Ads />
        {/* <EmbeddedFB /> */}
      </div>
    </div>
  );
};

export default RightMenu;
