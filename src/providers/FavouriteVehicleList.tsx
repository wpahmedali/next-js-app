import React, {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
} from 'react';

type FavoriteCarsContextType = {
  favoriteCars: number[];
  toggleFavorite: (carId: number) => void;
  toggleRemoveFavorite: () => void;
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
  const [favoriteCars, setFavoriteCars] = useState<number[]>(() => {
    if (isLocalStorageAvailable()) {
      const storedFavoriteCars =
        JSON.parse(localStorage.getItem('favoriteVehicleList')) || [];
      return storedFavoriteCars;
    }
    return [];
  });

  const toggleFavorite = (carId: number) => {
    let favoriteVehicleData =
      JSON.parse(localStorage.getItem('favoriteVehicleList')) || [];

    const isDataExistingIndex = favoriteVehicleData.findIndex(
      (item) => item === carId
    );

    if (isDataExistingIndex !== -1) {
      favoriteVehicleData.splice(isDataExistingIndex, 1);
    } else {
      favoriteVehicleData.push(carId);
    }

    localStorage.setItem(
      'favoriteVehicleList',
      JSON.stringify(favoriteVehicleData)
    );

    setFavoriteCars(favoriteVehicleData);
  };

  const toggleRemoveFavorite = () => {
    localStorage.setItem('favoriteVehicleList', JSON.stringify([]));

    setFavoriteCars([]);
  };
  return (
    <FavoriteCarsContext.Provider
      value={{
        favoriteCars,
        toggleFavorite,
        toggleRemoveFavorite,
      }}
    >
      {children}
    </FavoriteCarsContext.Provider>
  );
};

export const useFavoriteCars = (): FavoriteCarsContextType => {
  return useContext(FavoriteCarsContext);
};
