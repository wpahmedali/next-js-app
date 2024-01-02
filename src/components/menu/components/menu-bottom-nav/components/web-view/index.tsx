import { Popover } from '@headlessui/react';
import AboutUs from './components/AboutUs';
import SupportFAQ from './components/SupportFAQ';
import GlobalStock from './components/GlobalStock';
import GlobalContact from './components/GlobalContacts';

const WebView = (): JSX.Element => {
  return (
    <nav
      className="flex mx-auto max-w-7xl md:block sm:hidden xs:hidden xxs:hidden 3xl:block 2xl:block items-center lg:justify-center 2xl:justify-center md:justify-center md:items-center lg:px-8 lg:py-0 md:py-2 sm:py-1 sm:items-end sm:justify-end xs:justify-end xs:items-end"
      aria-label="Global"
    >
      <Popover.Group className="flex justify-center lg:gap-x-0">
        <AboutUs />

        <SupportFAQ />

        <GlobalStock />

        <GlobalContact />
      </Popover.Group>
    </nav>
  );
};

export default WebView;
