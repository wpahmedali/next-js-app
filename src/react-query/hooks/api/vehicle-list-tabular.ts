import { useQuery } from 'react-query';
import { getVehicleList } from 'react-query/api/vehicle-list';
import { reactQuery } from 'src/common/constants';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { IVehicleList } from 'src/interfaces/vehicle-list.interface';

export const useVehicleListTabular = (params: ICarListParams) =>
  useQuery<IApiResponse<IVehicleList>, Error>(
    [reactQuery.vehicleList.tabular, params],
    () => getVehicleList(params)
  );
