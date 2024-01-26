import { NextRouter, useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { IBodySpec } from '../../../interfaces/VehicleCard.interface';

const BodySpec = ({
  modelName,
  colorName,
  fuelName,
  driveName,
  doors,
  seats,
  lotNo,
  carId,
}: IBodySpec) => {
  const router: NextRouter = useRouter();
  const { auction } = router.query;
  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-blue-800 leading-4 py-2">
          {modelName}
        </span>
      </div>
      <div className="flex items-center justify-between border-b border-zinc-300 pb-2">
        <h1 className="text-xs font-bold text-[#000cad] leading-4">
          Stock No:
          <span className="text-xs font-bold text-black leading-4 ml-2">
            {carId}
          </span>
        </h1>

        <span className="text-xs font-bold text-[#000cad] leading-4">
          {colorName}
        </span>
      </div>
      {auction && lotNo ? (
        <div className="flex items-center justify-between border-b border-zinc-300 pb-2">
          <h1 className="text-xs font-bold text-[#000cad] leading-4">
            Lot No:
            <span className="text-xs font-bold text-black leading-4 dark:text-white ml-2">
              {lotNo}
            </span>
          </h1>
        </div>
      ) : (
        ''
      )}
      <div className="w-full">
        <h1 className="text-xs font-bold text-[#3a3a3a] leading-4 text-left py-2">
          {fuelName}, {driveName}, {doors} doors, {seats} seats
        </h1>
      </div>
    </Fragment>
  );
};

export default BodySpec;
