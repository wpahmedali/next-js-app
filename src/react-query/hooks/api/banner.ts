import { useQuery } from 'react-query';
import { getBanner } from 'react-query/api/banner';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IBanner } from 'src/interfaces/banner.interface';

export const useBanner = (id: number) =>
  useQuery<IApiResponse<IBanner[]>, Error>(['banner', id], () => getBanner(id));
