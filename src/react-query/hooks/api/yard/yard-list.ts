import { useQuery } from 'react-query';
import { getYardList } from 'react-query/api/yard/yard-list';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IYardList } from 'src/interfaces/yard-list.interface';

export const useYardList = (countryId: number) =>
  useQuery<IApiResponse<IYardList>, Error>(['yardList', countryId], () =>
    getYardList(countryId)
  );
