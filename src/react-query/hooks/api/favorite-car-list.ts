import { useQuery } from 'react-query';
import { getFavoriteCarsList } from 'react-query/api/favorite-car-list';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

export const useFavoritecarsList = (carIds: number[]) =>
  useQuery<IApiResponse<IVehicleDetail[]>, Error>(
    ['favoriteCarsList', carIds],
    () => getFavoriteCarsList(carIds)
  );
