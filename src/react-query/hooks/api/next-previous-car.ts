import { useQuery } from 'react-query';
import { getNextPreviousCarList } from 'react-query/api/next-previous-car';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { INextPreviousVehicleList } from 'src/interfaces/vehicle-detail.interface copy';

export const useNextPreviousCarList = (params: ICarListParams) =>
  useQuery<IApiResponse<INextPreviousVehicleList[]>, Error>(
    [
      'nextPreviousCar',
      params.countryId,
      params.makerId,
      params.modelId,
      params.bodyTypeId,
    ],
    () => getNextPreviousCarList(params)
  );
