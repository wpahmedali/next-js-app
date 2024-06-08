import React from 'react';
import { CcIcon, MilageIcon, SteeringIcon } from 'icons';
import { IEngineSpec } from '../../../interfaces/VehicleCard.interface';

const EngineSpec = ({
  engineSize,
  registrationYear,
  registrationMonth,
  mileage,
  steeringName,
  transmissionName
}: IEngineSpec) => {
  return (
    <div className="flex items-center justify-between bg-[#FFFEEF] rounded-b p-2">
      <div className="items-center justify-items-center grid">
        <CcIcon />
        <span className="text-[10px] font-medium text-black leading-4 py-2">
          {engineSize} CC {registrationYear}/{registrationMonth}
        </span>
      </div>
      <div className="items-center justify-items-center grid">
        <MilageIcon />
        <span className="text-[10px] font-medium text-black leading-4 py-2">
          {mileage} KM
        </span>
      </div>
      <div className=" content-center justify-items-center grid">
        <SteeringIcon />
        <span className="text-[10px] font-medium text-black leading-4 py-2">
          {transmissionName} {steeringName}
        </span>
      </div>
    </div>
  );
};

export default EngineSpec;
