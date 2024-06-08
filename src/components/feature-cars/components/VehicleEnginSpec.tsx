import React, { Fragment } from 'react';
import Image from 'next/image';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const VehicleEnginSpec = ({ data }: { data: IVehicleDetail }) => {
  return (
    <Fragment>
      <div className="flex border-b py-2">
        <div className="text-xl font-bold text-black text-center px-3">
          <span>
            {data.fuelName ? data.fuelName + ', ' : ''}{' '}
            {data.driveName ? data.driveName + ', ' : ''}{' '}
            {data.doors ? data.doors + ' doors, ' : ''}{' '}
            {data.seats ? data.seats + 'seats' : ''}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-primary rounded-b px-3 py-1">
        <div className="items-center justify-items-center grid">
          <Image
            alt=""
            className=""
            src={'/assets/enginecc.svg'}
            width={30}
            height={25}
          ></Image>
          <span className="text-[10px] font-medium text-black leading-4 py-2">
            {data.engineSize} CC {data.registrationYear}/
            {data.registrationMonth}
          </span>
        </div>
        <div className="items-center justify-items-center grid">
          <Image
            alt=""
            className=""
            src={'/assets/km.svg'}
            width={30}
            height={25}
          ></Image>
          <span className="text-[10px] font-medium text-black leading-4 py-2">
            {data.mileage} KM
          </span>
        </div>
        <div className=" content-center justify-items-center grid">
          <Image
            alt=""
            className=""
            src={'/assets/drive-r.svg'}
            width={30}
            height={25}
          ></Image>
          <span className="text-[10px] font-medium text-black leading-4 py-2">
            {data.transmissionName} {data.steeringName}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default VehicleEnginSpec;
