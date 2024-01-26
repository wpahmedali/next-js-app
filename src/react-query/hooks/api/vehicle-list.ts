import { useQuery } from 'react-query';
import { getVehicleList } from 'react-query/api/vehicle-list';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { IVehicleList } from 'src/interfaces/vehicle-list.interface';

export const useVehicleList = (view: string, params: ICarListParams) =>
  useQuery<IApiResponse<IVehicleList>, Error>([view, params], () =>
    getVehicleList(params)
  );
