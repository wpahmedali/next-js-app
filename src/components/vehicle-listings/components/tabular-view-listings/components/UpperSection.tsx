import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { listingLoaderImage } from 'src/common/listing-loader-image';
import { IVehicleTabular } from '../interfaces/VehicleItem.interface';
import { NextRouter, useRouter } from 'next/router';
import { useCurrentCountry } from 'src/hooks/current-country';
import { useSetContext } from 'src/providers/ModelContext';

const UpperSection = ({ url, isEven, data }: IVehicleTabular) => {
  const {
    query: { auction },
  }: NextRouter = useRouter();
  const setContext = useSetContext();
  const currentCountry = useCurrentCountry(data.countryId);

  const classes = `border border-[#EDEDED] ${
    isEven ? 'bg-[#FFFEEF]' : 'bg-[#E9FAFF]'
  }`;

  return (
    <tr className="cursor-pointer">
      {/* <td
        className={`${classes} bg-cover bg-center relative w-[200px] align-top`}
        rowSpan={2}
      >
        {data.isDelivery === 1 && currentCountry.isDelivered === 1 && (
          <Image
            alt=""
            className="top-0 left-0 absolute Z-50"
            src={'/assets/reserved.png'}
            width={90}
            height={100}
          ></Image>
        )}

        <Link href={url} onClick={() => setContext('')}>
          <Image
            src={data.imageUrl || '/assets/car-no-image.jpg'}
            alt=""
            loading="lazy"
            width={200}
            height={100}
            placeholder="blur"
            blurDataURL={listingLoaderImage}
          />
        </Link>
      </td> */}

      <td className={`${classes} p-2 text-left`} colSpan={4}>
        <h2 className="font-bold">
          {data?.makerName} {data?.modelName}
        </h2>
      </td>
      <td className={`${classes} p-2 text-xs font-bold text-center`}>
        {data.chassisNo}
      </td>
      <td className={`${classes} p-2 text-xs font-bold text-center`}>
        {data.colorName}
      </td>
      <td
        className={`${classes} p-2 text-xs text-center`}
        style={{ color: 'red' }}
      >
        {data.registrationYear}/{data.registrationMonth} <br></br>{' '}
        {data.engineSize} CC
      </td>

      <td className={`${classes} p-2 text-xs font-bold text-center`}>
        <div className="items-center justify-items-center grid">
          {auction && data.lotNo && (
            <span className="border-b-2 text-red-500 font-extrabold border-zinc-300 pt-1">
              Lot No: {data.lotNo}
            </span>
          )}
          <span className="pb-1">{data.carId}</span>
        </div>
      </td>

      <td className={`${classes} p-2 text-xs text-center`}>
        {data.mileage} KM
      </td>
    </tr>
  );
};

export default UpperSection;
