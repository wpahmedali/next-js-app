import React, {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
  useEffect,
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
    const testKey = 'favoriteVehicleList';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

const EXPIRY_TIME = 24 * 60 * 60 * 1000;

export const FavoriteCarsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favoriteCars, setFavoriteCars] = useState<IVehicleDetail[]>(() => {
    if (isLocalStorageAvailable()) {
      const storedFavoriteCars =
        JSON.parse(localStorage.getItem('favoriteVehicleList')) || [];

      const currentTime = Date.now();
      const updatedFavoriteCars = storedFavoriteCars.filter(
        (car) => currentTime - car.timestamp < EXPIRY_TIME
      );

      localStorage.setItem(
        'favoriteVehicleList',
        JSON.stringify(updatedFavoriteCars)
      );

      return updatedFavoriteCars;
    }
    return [];
  });

  useEffect(() => {
    const updateLocalStorage = () => {
      if (isLocalStorageAvailable()) {
        const storedFavoriteCars =
          JSON.parse(localStorage.getItem('favoriteVehicleList')) || [];

        const currentTime = Date.now();
        const updatedFavoriteCars = storedFavoriteCars.filter(
          (car) => currentTime - car.timestamp < EXPIRY_TIME
        );

        localStorage.setItem(
          'favoriteVehicleList',
          JSON.stringify(updatedFavoriteCars)
        );

        setFavoriteCars(updatedFavoriteCars);
      }
    };

    const interval = setInterval(updateLocalStorage, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleFavorite = (carDetails: IVehicleDetail) => {
    let favoriteVehicleData =
      JSON.parse(localStorage.getItem('favoriteVehicleList')) || [];

    const isDataExistingIndex = favoriteVehicleData.findIndex(
      (item) => item.carId === carDetails.carId
    );

    const currentTime = Date.now();

    if (isDataExistingIndex !== -1) {
      favoriteVehicleData.splice(isDataExistingIndex, 1);
    } else {
      const updatedCarDetails = { ...carDetails, timestamp: currentTime };
      favoriteVehicleData.push(updatedCarDetails);
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
