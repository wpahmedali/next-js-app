import React, { Fragment } from 'react';
import JardItem from './YardItem';
import { IYardItem } from 'src/interfaces/yard-list.interface';
import { useCurrentCountry } from 'src/hooks/current-country';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const Yard = ({
  data,
  totaldCars,
  reserved,
}: {
  data: IYardItem[];
  totaldCars: number;
  reserved: boolean;
}): JSX.Element => {
  const currentCountry = useCurrentCountry();

  return (
    <Fragment>
      <div className="flex bg-black p-2 gap-1 items-center">
        <span>
          {currentCountry?.countryName === 'Global' ? (
            <GlobeAltIcon className="h-6 w-6 text-white" />
          ) : (
            currentCountry?.flagIcon
          )}
        </span>{' '}
        <h2 className="bold text-white">
          {reserved ? 'Reserved' : currentCountry.countryName} ({totaldCars}{' '}
          Cars Found)
        </h2>
      </div>
      <div className="flex-col gap-2">
        {data?.map((item) => (
          <JardItem key={item.id} data={item} reserved={reserved} />
        ))}
      </div>
    </Fragment>
  );
};

export default Yard;
