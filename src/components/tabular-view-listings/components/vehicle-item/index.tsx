import React, { Fragment } from 'react';
import UpperSection from './components/UpperSection';
import LowerSection from './components/LowerSection';
import { IVehicleTabular } from 'components/tabular-view-listings/interfaces/VehicleItem.interface';

const VehicleItem = ({ url, isEven, data }: IVehicleTabular) => {
  return (
    <Fragment>
      <UpperSection isEven={isEven} data={data} url={url} />
      <LowerSection isEven={isEven} data={data} url={url} />
    </Fragment>
  );
};

export default VehicleItem;
