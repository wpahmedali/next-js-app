import React, { useEffect, useState } from 'react';
import { WhatsappIcon } from 'icons';
import { getCountryIcon } from 'utils/get-country-icon';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';
import { useFavoriteCars } from 'src/providers/FavouriteVehicleList';
import { notify } from 'utils/toast';
import { FavIcon } from 'icons';
import Loading from 'components/loading';
import { ClipBoardIcon } from 'icons/react-icons/ClipBoard';

const WhatsApp = ({
  data,
  loading,
  takeScreenshotAndShare,
  takeScreenshotAndSaveToClipboard,
}: {
  data: IVehicleDetail;
  loading: string;
  takeScreenshotAndShare: any;
  takeScreenshotAndSaveToClipboard: any;
}) => {
  const { favoriteCars, toggleFavorite } = useFavoriteCars();
  const [isfavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(true);
  }, []);

  const handleFavoriteClick = () => {
    toggleFavorite(data?.carId);
    notify(
      'success',
      favoriteCars.find((x) => x === data.carId)
        ? 'Remove From Favourite'
        : 'Add to Favourite'
    );
  };
  const countryIcon = getCountryIcon(data.cssClass);

  return (
    <div className="flex items-center justify-around py-1">
      <button
        className="mr-1 flex gap-1"
        onClick={() => takeScreenshotAndSaveToClipboard()}
      >
        {loading === 'copy' ? (
          <Loading height="h-4" width="w-4" />
        ) : (
          <ClipBoardIcon />
        )}
      </button>
      <button
        className="mr-1 flex gap-1"
        onClick={() => takeScreenshotAndShare()}
      >
        {loading === 'share' ? (
          <Loading height="h-4" width="w-4" />
        ) : (
          <WhatsappIcon />
        )}
        <span className="text-[10px] font-semibold text-white leading-4">
          Whatsapp
        </span>
      </button>
      <button
        onClick={handleFavoriteClick}
        className="flex items-center justify-between"
      >
        <FavIcon
          color={
            isfavorite &&
            favoriteCars.filter((x) => x === data.carId).length > 0
              ? 'red'
              : 'gray'
          }
        />
        <span className="text-[10px] font-semibold text-white leading-4 ml-1">
          Favorites
        </span>
      </button>
      <div className="flex justify-between items-center">
        {countryIcon}
        <span className="text-[10px] font-semibold text-white leading-4 ml-1">
          {data.countryName}
        </span>
      </div>
    </div>
  );
};

export default WhatsApp;
