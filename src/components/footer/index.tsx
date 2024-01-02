import React from 'react';
import SocialIcons from 'components/footer/components/social-icons';
import Bottom from './components/bottom';
import Branches from './components/branches';
import Contacts from './components/contacts';
import AboutUs from './components/about-us';
import SupportFaqs from './components/support-faqs';
import Image from 'next/image';
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className="bg-primaryDark text-white">
      <div className="mx-auto w-full p-4 py-6 lg:py-8 xl:px-52 2xl:px-52 lg:px-24 md:px-4 sm:px-2 xs:px-2 xxs:px-2">
        <div className="grid gap-8 sm:gap-6 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 sm:mb-2 xs:mb-2 xxs:mb-2">

          <div className="pr-6 xl:basis-1/4 lg:basis-1/4 md:basis-2/4 sm:basis-1/4 xs:basis-1/4 xxs:basis-1/4 lg:border-e md:border-e sm:border-e-0 border-[#555555] xs:border-e-0  xxs:border-e-0">
            <Link href="/">
              <div className="mob-bg lg:hidden md:hidden sm:hidden xs:hidden xxs:hidden bg-primary h-10 w-full absolute top-0"></div>

              <Image alt="" className="pl-4 items-center justify-between static z-20 top-0 left-0 sm:translate-x-[-5%] sm:left-[5%] xs:translate-x-[-5%] xs:left-[5%] xxs:left-[5%] xxs:translate-x-[-5%] lg:left-0 lg:translate-x-0 md:translate-x-0 md:left-0" src="/asset/images/logo/jans-logo.png" width={227}
                height={68} />
            </Link>
          </div>

          <div className="xl:basis-1/4 lg:basis-1/4 md:basis-2/4 sm:basis-1/4 xs:basis-1/4 xxs:basis-1/4 lg:border-e md:border-e sm:border-e-0 border-[#555555] xs:border-e-0  xxs:border-e-0">
            <AboutUs />

          </div>

          <SupportFaqs />

          {/*    <div className="xl:basis-1/4 xxl:basis-1/4 lg:basis-1/4 md:basis-2/4 sm:basis-1/4 xs:basis-1/4 xxs:basis-1/4 border-e border-[#555555] lg:border-e md:border-e sm:border-e-0 xs:border-e-0 xxs:border-e-0">
            <Branches />
            <Contacts />
          </div> */}

          <SocialIcons />
        </div>
      </div>

      <Bottom />
    </footer>
  );
};

export default Footer;
