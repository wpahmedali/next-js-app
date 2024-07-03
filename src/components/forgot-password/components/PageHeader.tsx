import React, { Fragment } from 'react';
import Image from 'next/image';

const PageHeader = () => {
  return (
    <Fragment>
      <div className="flex justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt="logo"
          className="items-center sm:translate-x-[-4px] sm:left-[-4px] xs:translate-x-[-4px] xs:left-[-4px] xxs:left-[-4px] xxs:translate-x-[-4px] lg:left-0 lg:translate-x-0 md:translate-x-0 md:left-0 3xl:w-auto 2xl:w-auto lg:w-auto md:w-44 md-pl-2 2xl:mt-0 lg:mt-0 md:mt-0 sm:w-36 sm:mt-2 xs:w-36 xs:mt-2 xxs:w-36 xxs:mt-2"
          src="/asset/images/logo/logo1.png"
          width={227}
          height={68}
        />
      </div>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 px-8">
        Inventory System
      </h2>
    </Fragment>
  );
};

export default PageHeader;
