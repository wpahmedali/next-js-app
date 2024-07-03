import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primaryDark text-white">
      <div className="sm:flex sm:items-center sm:justify-center xs:flex xs:items-center xs:justify-center xs:px-2 xxs:items-center xxs:justify-center xxs:px-2 py-2 px-52 bg-[#333333] sm:px-0">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 sm:w-full xs:w-full xxs:w-full">
          © 2023{' '}
          <Link href="/" className="hover:underline">
            JAN'S Group
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
