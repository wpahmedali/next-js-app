import Image from 'next/image';
import React from 'react';

const TyreBanner = () => {
  return (
    <div>
      <Image
        alt="Tyre Banner"
        src="https://janjapan.com/resources/images/tyre/Banner-02.jpg"
        className="relative w-full"
        width={1000}
        height={300}
      />
    </div>
  );
};

export default TyreBanner;
