import Image from 'next/image';
import React, { Fragment } from 'react';
import { useCurrentCountry } from 'src/hooks/current-country';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const TagImages = ({ data }: { data: IVehicleDetail }) => {
  const currentCountry = useCurrentCountry(data.countryId);

  return (
    <Fragment>
      {data.isDelivery === 1 && currentCountry.isDelivered === 1 && (
        <Image
          alt=""
          className="absolute top-0 left-0"
          src={'/assets/reserved.png'}
          width={90}
          height={100}
        />
      )}
    </Fragment>
  );
};

export default TagImages;
