import Image from 'next/image';
import React from 'react';
import img from 'public/assets/Banner-02.jpg'

const TyreBanner = () => {
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

export default TyreBanner;
