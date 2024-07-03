import { useQuery } from 'react-query';
import { getPosterList } from 'react-query/api/fetch-poster';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { IPosterList } from 'src/interfaces/poster-list.interface';

export const usePosterList = (params: ICarListParams) =>
  useQuery<IApiResponse<IPosterList>, Error>(['Poster', params], () =>
    getPosterList(params)
  );
