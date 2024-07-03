import React from 'react';
import Image from 'next/image';
import 'react-toastify/dist/ReactToastify.css';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const VehicleTags = ({ data }: { data: IVehicleDetail }) => {
  return (
    <div className="flex gap-1 items-center px-2 border-t">
      {data?.fuelName?.toLowerCase() === 'hybrid-gasoline' && (
        <span className="my-2">
          <Image
            alt=""
            src={'/assets/hybrid-logo.png'}
            width={40}
            height={10}
          ></Image>
        </span>
      )}
      {data?.driveName?.toLowerCase() === '4wheel drive' && (
        <span className="my-2">
          <Image alt="" src={'/assets/4WD.png'} width={35} height={12}></Image>
        </span>
      )}
      {data?.fuelName?.toLowerCase() === 'diesel' && (
        <span className="my-2">
          <Image
            alt=""
            src={'/assets/desel.png'}
            width={60}
            height={12}
          ></Image>
        </span>
      )}
    </div>
  );
};

export default VehicleTags;
