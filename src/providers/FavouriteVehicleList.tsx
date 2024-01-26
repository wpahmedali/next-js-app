import React, {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
} from 'react';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

type FavoriteCarsContextType = {
  favoriteCars: IVehicleDetail[];
  toggleFavorite: (carDetails: IVehicleDetail) => void;
};

const FavoriteCarsContext = createContext<FavoriteCarsContextType | undefined>(
  undefined
);

const isLocalStorageAvailable = (): boolean => {
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

export const FavoriteCarsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favoriteCars, setFavoriteCars] = useState<IVehicleDetail[]>(() => {
    if (isLocalStorageAvailable()) {
      const storedFavoriteCars =
        JSON.parse(localStorage.getItem('favoriteVehicleList')) || [];
      return storedFavoriteCars;
    }
    return [];
  });

  const toggleFavorite = (carDetails: IVehicleDetail) => {
    let favoriteVehicleData =
      JSON.parse(localStorage.getItem('favoriteVehicleList')) || [];

    const isDataExistingIndex = favoriteVehicleData.findIndex(
      (item) => item.carId === carDetails.carId
    );

    if (isDataExistingIndex !== -1) {
      favoriteVehicleData.splice(isDataExistingIndex, 1);
    } else {
      favoriteVehicleData.push(carDetails);
    }

    localStorage.setItem(
      'favoriteVehicleList',
      JSON.stringify(favoriteVehicleData)
    );

    setFavoriteCars(favoriteVehicleData);
  };

  return (
    <FavoriteCarsContext.Provider
      value={{
        favoriteCars,
        toggleFavorite,
      }}
    >
      {children}
    </FavoriteCarsContext.Provider>
  );
};

export const useFavoriteCars = (): FavoriteCarsContextType => {
  return useContext(FavoriteCarsContext);
};
