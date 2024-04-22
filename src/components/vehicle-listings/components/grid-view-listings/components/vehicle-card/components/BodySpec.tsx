import { NextRouter, useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { IBodySpec } from '../../../interfaces/VehicleCard.interface';
import Link from 'next/link';
import { LocationIcon } from 'icons/react-icons/Location';

const BodySpec = ({ data, url, isPriceDisplay }: IBodySpec) => {
  const router: NextRouter = useRouter();
  const { auction } = router.query;
  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-blue-800 leading-4 py-2">
          {data?.modelName}
        </span>
      </div>
      {auction && data?.lotNo ? (
        <div className="flex items-center justify-between border-b border-zinc-300 pb-2">
          <h1 className="text-xs font-extrabold text-red-500 leading-4">
            Lot No:
            <span className="text-xs font-extrabold text-red-500 leading-4  ml-2">
              {data.lotNo}
            </span>
          </h1>
        </div>
      ) : (
        ''
      )}
      <div className="flex items-center justify-between border-b border-zinc-300 pb-2">
        <h1 className="text-xs font-bold text-[#000cad] leading-4">
          Stock No:
          <span className="text-xs font-bold text-black leading-4 ml-2">
            {data?.carId}
          </span>
        </h1>

        <span className="text-xs font-bold text-[#000cad] leading-4">
          {data?.colorName}
        </span>
      </div>
      <div className="flex items-center justify-between border-b border-zinc-300 py-2">
        <h1 className="text-xs font-bold text-[#000cad] leading-4">
          Price:
          {data?.fobPrice != 0 &&
          data?.currencySymbol &&
          isPriceDisplay === 1 &&
          data.priceAsk !== 1 ? (
            <span className="text-xs font-bold text-black leading-4 ml-2">
              {data.currencySymbol} {data.fobPrice}
            </span>
          ) : (
            <Link href={url}> ASK</Link>
          )}
        </h1>
        <div>
          <h1 className="text-xs font-bold text-primaryDark leading-4 flex">
            <LocationIcon />
            {data.cityName}
          </h1>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-xs font-bold text-[#3a3a3a] leading-4 text-left py-2">
          {data.fuelName ? data.fuelName + ', ' : ''}{' '}
          {data.driveName ? data.driveName + ', ' : ''}{' '}
          {data.doors ? data.doors + ' doors, ' : ''}{' '}
          {data.seats ? data.seats + ' seats' : ''}
        </h1>
      </div>
    </Fragment>
  );
};

export default BodySpec;
