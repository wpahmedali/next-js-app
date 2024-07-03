import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="mt-4 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-between items-center">
      <div className="bar-code">
        <Image
          alt="Barcode Image"
          className="items-center"
          src="/assets/bar-code.jpg"
          width={256}
          height={43}
        />
      </div>
      <h3 className="w-64 font-bold text-center">http://www.janjapan.com</h3>
    </div>
  );
};
export default Footer;
