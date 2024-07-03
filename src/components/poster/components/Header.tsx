import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex items-end justify-between border-b border-black">
      <div className="company-logo">
        <Image
          alt="logo"
          className="items-center"
          src="/asset/images/logo/logop.png"
          width={227}
          height={68}
        />
      </div>
      <div className="text-black font-semibold text-sm mb-2">
        Stock#:
        <input
          type="text"
          className="w-36 text-sm"
          placeholder="Enter stock number"
        />
      </div>
      <div className="text-black font-semibold text-sm mb-2">
        Price(Negotiable):
        <input
          type="text"
          className="w-36 text-sm"
          placeholder="Enter stock number"
        />
      </div>
    </div>
  );
};
export default Header;
