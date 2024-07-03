import { useQuery } from 'react-query';
import { getTyreList } from 'react-query/api/tyres/zambia/tyre-list';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ITyreList } from 'src/interfaces/tyres/zambia/tyre-list.interface';

export const useTyreList = (
  countryId: number,
  page: number,
  categoryId: number,
  tyreSizeId: number,
  keyWord: string
) =>
  useQuery<IApiResponse<ITyreList>, Error>(
    ['tyreList', countryId, page, categoryId, tyreSizeId, keyWord],
    () => getTyreList(countryId, page, categoryId, tyreSizeId, keyWord)
  );
