import React, { Fragment } from 'react';
import CarImages from './components/CarImages';
import InspectionNotes from './components/InspectionNotes';
import Features from './components/Features';
import Accessories from './components/Accessories';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';
import VehicleTitle from './components/VehicleTitle';

const PrintVehicleDetail = ({ data }: { data: IVehicleDetail }) => {
  return (
    <Fragment>
      <VehicleTitle data={data} />
      <div className="car-status">
        <div className="lot-no" />
        <div className="sold">
          <h3 className="my-4" />
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-row justify-between">
        <div className="car-image 2xl:w-1/2 xl:w-1/2 lg:w-1/2 sm:w-full">
          <CarImages data={data} />
          <InspectionNotes />
        </div>
        <div className="notes 2xl:w-1/2 xl:w-1/2 lg:w-1/2 sm:w-full">
          <Features data={data} />
          <Accessories data={data} />
        </div>
      </div>
    </Fragment>
  );
};

export default PrintVehicleDetail;
