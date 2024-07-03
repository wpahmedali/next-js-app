import React from 'react';
import Gallery from './components/gallery';
import Specifications from 'components/vehicle-detail/components/vehicle-info/components/Specifications';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const VehicleInfo = ({ data }: { data: IVehicleDetail }): JSX.Element => {
  return (
    <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 grid-rows gap-4">
      <Specifications data={data} />
      <Gallery data={data} />
    </div>
  );
};

export default VehicleInfo;
