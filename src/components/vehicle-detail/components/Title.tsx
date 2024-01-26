import Image from 'next/image';
import React from 'react';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const Title = ({ data }: { data: IVehicleDetail }) => {
  return (
    <div className="flex justify-between my-2 bg-black text-white p-4">
      <div className="title font-bold uppercase text-lg">
        <h2>
          {data.makerName} {data.modelName} - {data.registrationYear}{' '}
        </h2>
      </div>
      <div>
        {data?.fuelName?.toLowerCase() === 'hybrid-gasoline' && (
          <span>
            <Image
              alt=""
              src={'/assets/hybrid-logo.png'}
              width={70}
              height={70}
            ></Image>
          </span>
        )}
        {data?.driveName?.toLowerCase() === '4wheel drive' && (
          <span>
            <Image
              alt=""
              src={'/assets/4wd.svg'}
              width={70}
              height={70}
            ></Image>
          </span>
        )}
        {data?.fuelName?.toLowerCase() === 'diesel' && (
          <span>
            <Image
              alt=""
              src={'/assets/diesel.svg'}
              width={100}
              height={100}
            ></Image>
          </span>
        )}
      </div>
    </div>
  );
};

export default Title;
