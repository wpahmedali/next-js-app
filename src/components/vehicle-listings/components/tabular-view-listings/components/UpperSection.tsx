import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { listingLoaderImage } from 'src/common/listing-loader-image';
import { IVehicleTabular } from '../interfaces/VehicleItem.interface';
import { useCurrentCountry } from 'src/hooks/current-country';

const UpperSection = ({ special, url, isEven, data }: IVehicleTabular) => {
  const currentCountry = useCurrentCountry(data.countryId);

  const classes = `border border-[#EDEDED] ${
    isEven ? 'bg-[#FFFEEF]' : 'bg-[#E9FAFF]'
  }`;

  return (
    <tr className="cursor-pointer">
      <td
        className={`${classes} bg-cover bg-center relative w-[200px] overflow-hidden`}
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

        {data.discountedPrice > 0 && (
          <Image
            alt=""
            className="top-0 right-0"
            src={'/assets/special.png'}
            width={63}
            height={63}
          />
        )}
        <Link href={url}>
          <Image
            src={data.imageUrl}
            alt=""
            loading="lazy"
            width={200}
            height={100}
            placeholder="blur"
            blurDataURL={listingLoaderImage}
          />
        </Link>
        {!data?.auctionDate && data?.portArrivalDate && special && (
          <Fragment>
            <div className="bg-red-600 absolute p-0 text-white text-left px-2 animate-pulse w-9/12 top-0">
              Port Arrival Date
            </div>
            <span className="bg-red-600 text-white w-full absolute p-1 text-center rotate-45 top-5 -right-16 text-sm font-bold animate-pulse">
              {data?.portArrivalDate}
            </span>
          </Fragment>
        )}
        {data?.auctionDate && special && (
          <Fragment>
            <div className="bg-red-600 absolute p-0 text-white text-left px-2 animate-pulse w-9/12 top-0">
              Auction Date
            </div>
            <span className="bg-red-600 text-white w-full absolute p-1 text-center rotate-45 top-5 -right-16 text-sm font-bold animate-pulse">
              {data?.auctionDate}
            </span>
          </Fragment>
        )}
      </td>
      <td className={`${classes} p-2 text-left`}>
        <h2 className="font-bold">{data.modelName}</h2>
      </td>
      <td className={`${classes} p-2 text-xs text-center`}>
        {data.currencySymbol &&
        data.fobPrice != 0 &&
        currentCountry.isPriceDisplay === 1 &&
        data.priceAsk !== 1 ? (
          <span className="font-bold">
            {data.currencySymbol} <br></br> {data.fobPrice}
          </span>
        ) : (
          <Link href={url} className="text-blue-700 text-sm">
            ASK
          </Link>
        )}
      </td>
      <td
        className={`${classes} p-2 text-xs text-center`}
        style={{ color: 'red' }}
      >
        {data.registrationYear}/{data.registrationMonth} <br></br>{' '}
        {data.engineSize} CC
      </td>
      <td className={`${classes} p-2 text-xs font-bold text-center`}>
        {data.colorName}
      </td>
      <td className={`${classes} p-2 text-xs font-bold text-center`}>
        <div className="items-center justify-items-center grid">
          {data.lotNo && (
            <span className="border-b-2 text-red-500 font-extrabold border-zinc-300 pt-1">
              Lot No: {data.lotNo}
            </span>
          )}
          <span className="pb-1">{data.carId}</span>
        </div>
      </td>
      <td className={`${classes} p-2 text-xs font-bold text-center`}>
        {data.chassisNo}
      </td>
      <td className={`${classes} p-2 text-xs text-center`}>
        {data.mileage} KM
      </td>
    </tr>
  );
};

export default UpperSection;
