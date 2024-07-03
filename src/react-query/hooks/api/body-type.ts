import { useQuery } from 'react-query';
import { getBodyType } from 'react-query/api/body-type';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IBodyType } from 'src/interfaces/body-type.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const useBodyType = (params: ICarListParams) =>
  useQuery<IApiResponse<IBodyType[]>, Error>(
    ['bodyType', params.countryId, params.yardId, params.isReserved],
    () => getBodyType(params)
  );
