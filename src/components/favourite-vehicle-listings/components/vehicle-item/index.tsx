import React, { Fragment } from 'react';
import UpperSection from './components/UpperSection';
import LowerSection from './components/LowerSection';
import { IVehicleTabular } from 'components/favourite-vehicle-listings/interfaces/VehicleItem.interface';

const VehicleItem = ({ isEven, data }: IVehicleTabular) => {
  return (
    <Fragment>
      <UpperSection isEven={isEven} data={data} />
      <LowerSection isEven={isEven} data={data} />
    </Fragment>
  );
};

export default VehicleItem;
