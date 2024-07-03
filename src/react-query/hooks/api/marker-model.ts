import { useQuery } from 'react-query';
import { getMakerModel } from 'react-query/api/maker-model';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { IMakerModel } from 'src/interfaces/marker-model.interface';

export const useMakerModel = (params: ICarListParams) =>
  useQuery<IApiResponse<IMakerModel[]>, Error>(
    ['makerModel', params.countryId, params.yardId],
    () => getMakerModel(params)
  );
