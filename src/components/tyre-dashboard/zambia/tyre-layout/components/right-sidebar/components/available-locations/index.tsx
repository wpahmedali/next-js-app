import React from 'react';
import { useTyreAddress } from 'react-query/hooks/api/tyres/zambia/tyre-address';
import Loading from 'components/loading';
import Error from 'components/error';
import LocationCard from './components/location-card';
import { zambiaCountry } from 'components/tyre-dashboard/common/constants';

const AvailableLocations = (): JSX.Element => {
  const countryId = zambiaCountry.id;

  const { data, isLoading, isError, isSuccess } = useTyreAddress(countryId);

  return (
    <div className="max-w-full">
      <details className="px-1 pb-0 my-2 mt-0" open={true}>
        <summary className="text-sm leading-6 text-white font-semibold select-none p-3 bg-black md:text-xs">
          Available Locations
        </summary>
        <div className="sm:block xs:block xxs:block mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <div className="group inline-block w-full">
            <ul className="bg-white group-hover:scale-100  hover:sm:duration-0 text-[#2b2a2a] transition duration-150 ease-in-out origin-top w-full show">
              {isLoading && <Loading />}
              {(!data || isError) && !isLoading && <Error />}

              {isSuccess &&
                data?.data?.map((item, index) => (
                  <LocationCard
                    data={item}
                    key={item.city + item.address}
                    isEven={!!(index % 2 === 0)}
                  />
                ))}
            </ul>
          </div>
        </div>
      </details>
    </div>
  );
};

export default AvailableLocations;
