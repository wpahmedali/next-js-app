import React, { Fragment, useEffect, useState } from 'react';
import TabularHeader from 'components/vehicle-listings/components/tabular-view-listings/components/TabularHeader';
import UpperSection from 'components/vehicle-listings/components/tabular-view-listings/components/UpperSection';
import LowerSection from 'components/vehicle-listings/components/tabular-view-listings/components/LowerSection';
import { useFavoriteCars } from 'src/providers/FavouriteVehicleList';

const FavouriteVehicleListings = () => {
  const { favoriteCars } = useFavoriteCars();
  const [isfavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(true);
  }, []);

  return (
    <main className="bg-light w-full min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-xl color-black font-semibold border-zinc-300 pb-2 mt-2 flex">
          Favourite Vehicles
        </h1>
      </div>
      <div className="flex justify-between my-2">
        <div className="table-list-main w-full">
          {isfavorite && favoriteCars?.length === 0 ? (
            <div className="my-5 text-red-600 text-center">Data Not Found</div>
          ) : (
            <table className="table-auto border-collapse border border-slate-400 w-full">
              <TabularHeader />

              <tbody>
                {isfavorite &&
                  favoriteCars.map((item, index) => (
                    <Fragment key={index}>
                      <UpperSection
                        url="/home/compare_cars/1"
                        isEven={index % 2 !== 0}
                        data={item}
                      />
                      <LowerSection
                        url="/home/compare_cars/1"
                        isEven={index % 2 !== 0}
                        data={item}
                      />
                    </Fragment>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
};

export default FavouriteVehicleListings;
