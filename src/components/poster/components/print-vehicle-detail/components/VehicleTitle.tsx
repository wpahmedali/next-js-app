import React, { Fragment } from 'react';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const VehicleTitle = ({ data }: { data: IVehicleDetail }) => {
  return (
    <Fragment>
      <div className="text-center">
        <h1 className="text-3xl font-bold">{data?.chassisNo}</h1>
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold">
          {data?.makerName} {data?.modelName}
        </h1>
      </div>
    </Fragment>
  );
};
export default VehicleTitle;
