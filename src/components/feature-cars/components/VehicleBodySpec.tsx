import React, { Fragment } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';
import { listingLoaderImage } from 'src/common/listing-loader-image';
import Link from 'next/link';

const VehicleBodySpec = ({
  url,
  data,
}: {
  url: string;
  data: IVehicleDetail;
}) => {
  return (
    <Fragment>
      <Link href={url}>
        <Image
          alt=""
          className=""
          src={data.imageUrl.replace('/s_thumb', '/thumb')}
          blurDataURL={listingLoaderImage}
          loading="lazy"
          width={313}
          height={141}
        ></Image>
      </Link>

      <div className="flex items-center justify-between">
        <span className="text-xl font-bold bg-red-600 text-white leading-4 py-2 w-full uppercase text-center">
          <Typewriter
            options={{
              strings: [data.makerName + ' ' + data.modelName],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      <div className="flex justify-between border-b py-2 bg-[#464646] text-white text-lg px-3">
        <div className="text-xs font-bold text-primary leading-4">
          <span>Stock No: </span>
          <span className="text-white">{data.carId}</span>
        </div>
        <div className="text-xs font-bold">
          <span className="text-primary">Color: </span>
          <span className="text-white">{data.colorName}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default VehicleBodySpec;
