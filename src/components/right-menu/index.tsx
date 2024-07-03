import React from 'react';
import CountryToggleMenu from 'components/right-menu/components/CountryToggleMenu';
import TopShowedCountry from 'components/right-menu/components/TopShowedCountry';
import Yards from './components/yards';
import useMobileView from 'src/hooks/mobile-view';

const RightMenu = (): JSX.Element => {
  const MobileView = useMobileView();

  return (
    <div className="xxs:w-full xs:w-full sm:w-full 2xl:w-[375px] xl:w-[375px] lg:w-[375px] md:w-[300px] flex-col">
      <div className="w-full">
        <ul className="w-full rounded-lg mb-1 text-blue-800">
          <TopShowedCountry />
          {!MobileView && <CountryToggleMenu />}
        </ul>
        {!MobileView && <Yards />}
      </div>
    </div>
  );
};

export default RightMenu;
