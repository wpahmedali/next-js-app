import Image from 'next/image';
import React from 'react';

const Auction = ({
  vehicleImage,
  countryName,
  cityName,
}: {
  vehicleImage: string;
  countryName: string;
  cityName: string;
}): JSX.Element => {
  return (
    <div className="main">

      <div className="flex bg-primary text-black justify-start items-center p-3 px-7 text-sm">
        <div className="font-bold uppercase text-lg">Auction Sheet</div>
      </div>
      <div className="bg-gray-100 text-xs font-bold text-black p-3">
        <Image
          className="h-auto max-w-full rounded-lg hover:opacity-70 cursor-pointer focus:ring focus:ring-violet-300"
          src={vehicleImage}
          width={798}
          height={643}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Auction;
