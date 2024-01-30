import { Popover } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { IMobileView } from '../../interfaces/mobile-view.interface';
import AboutUs from './../web-view/components/AboutUs';
import SupportFAQ from './../web-view/components/SupportFAQ';
import GlobalStock from './../web-view/components/GlobalStock';
import GlobalContact from './../web-view/components/GlobalContacts';
import MenuBottomBar from 'components/menu/components/menu-bottom-bar';
import { useModelState, useSetContext } from 'src/providers/ModelContext';

const MobileView = (): JSX.Element => {
  const [mobileView, setMobileView] = useState(false);
  const setContext = useSetContext();
  const modelState = useModelState();

  function handlemobileMenuOpen() {
    if (modelState !== 'about-nav') {
      setContext('about-nav');
    } else {
      setContext('');
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;

      setMobileView(isMobileView);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full 2xl:hidden lg:hidden md:hidden sm:block xs:block xxs:block">
      <nav
        className="mx-auto flex-col max-w-7xl items-center relative lg:justify-center 2xl:justify-center md:justify-center md:items-center lg:px-8 lg:py-0 md:py-2 sm:py-1 sm:items-end sm:justify-end xs:justify-end xs:items-end"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="mx-1 my-0 flex items-center justify-center rounded-md p-2 text-gray-700 "
            onClick={handlemobileMenuOpen}
          >
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        {modelState == 'about-nav' ? (
          <Popover.Group className="2xl:inline-flex lg:inline-flex md:inline-flex lg:gap-x-0 w-full absolute top-10 h-screen max-w-[250px] left-0 bg-primary z-50">
            <AboutUs />

            <SupportFAQ />

            <GlobalStock />

            <GlobalContact />
          </Popover.Group>
        ) : null}
      </nav>

      {mobileView && <MenuBottomBar />}
    </div>
  );
};

export default MobileView;
