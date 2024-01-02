import { IVehicleTabular } from 'components/tabular-view-listings/interfaces/VehicleItem.interface';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { listingLoaderImage } from 'src/common/listing-loader-image';

const UpperSection = ({ url, isEven, data }: IVehicleTabular) => {
  const classes = `border border-[#EDEDED] ${
    isEven ? 'bg-[#FFFEEF]' : 'bg-[#E9FAFF]'
  }`;

  return (
    <tr className="cursor-pointer">
      <td className={`${classes} bg-cover bg-center`} rowSpan={2}>
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
      </td>
      <Fragment>
        <td className={`${classes} p-2 text-left`}>
          <h2 className="font-bold">{data.modelName}</h2>
        </td>
        <td className={`${classes} p-2 text-xs text-center`}>
          {data.engineSize} CC {data.registrationYear}/{data.registrationMonth}
        </td>
        <td className={`${classes} p-2 text-xs font-bold text-center`}>
          {data.colorName}
        </td>
        <td className={`${classes} p-2 text-xs font-bold text-center`}>
          {data.carId}
        </td>
        <td className={`${classes} p-2 text-xs font-bold text-center`}>
          {data.chassisNo}
        </td>
        <td className={`${classes} p-2 text-xs text-center`}>
          {data.mileage} KM
        </td>
      </Fragment>
    </tr>
  );
};

export default UpperSection;
