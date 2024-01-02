import { useQuery } from 'react-query';
import { getTyreCategory } from 'react-query/api/tyres/zambia/tyre-category';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ITyreCategory } from 'src/interfaces/tyres/zambia/tyre-category.interface';

export const useTyreCategory = (id: number) =>
  useQuery<IApiResponse<ITyreCategory[]>, Error>(['tyreCategory', id], () =>
    getTyreCategory(id)
  );
