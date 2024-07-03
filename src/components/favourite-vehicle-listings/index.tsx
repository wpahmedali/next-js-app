import React, { useEffect, useState } from 'react';
import TabularHeader from 'components/vehicle-listings/components/tabular-view-listings/components/TabularHeader';
import { useFavoriteCars } from 'src/providers/FavouriteVehicleList';
import FavouriteBody from './components/FavouriteBody';

const FavouriteVehicleListings = () => {
  const { favoriteCars, toggleRemoveFavorite } = useFavoriteCars();
  const [isfavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(true);
  }, []);

  const handleRemoveAllFavorites = () => {
    toggleRemoveFavorite();
  };

  return (
    <main className="bg-light w-full min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-xl color-black font-semibold border-zinc-300 pb-2 mt-2 flex">
          Favourite Vehicles
        </h1>
        {isfavorite && favoriteCars?.length > 0 && (
          <button
            onClick={handleRemoveAllFavorites}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Remove All Favorites
          </button>
        )}
      </div>
      <div className="flex justify-between my-2">
        <div className="table-list-main w-full">
          {isfavorite && favoriteCars?.length === 0 && (
            <div className="my-5 text-red-600 text-center">Data Not Found</div>
          )}
          {isfavorite && favoriteCars?.length > 0 && (
            <table className="table-auto border-collapse border border-slate-400 w-full">
              <TabularHeader />
              <FavouriteBody favoriteCars={favoriteCars} />
            </table>
          )}
        </div>
      </div>
    </main>
  );
};

export default FavouriteVehicleListings;
