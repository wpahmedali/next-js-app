import Image from 'next/image';
import React from 'react';
import img from 'public/assets/spare-part-banner.jpg';

const SparePartsBanner = () => {
  return (
    <div>
      <Image
        alt="Tyre Banner"
        src={img}
        className="relative w-full"
        width={1000}
        height={300}
      />
    </div>
  );
};

export default SparePartsBanner;
