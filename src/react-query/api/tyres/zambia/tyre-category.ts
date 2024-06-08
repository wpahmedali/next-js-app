import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ITyreCategory } from 'src/interfaces/tyres/zambia/tyre-category.interface';

export const getTyreCategory = async (
  id: number
): Promise<IApiResponse<ITyreCategory[] | null>> => {
  try {
    const { data }: { data: IApiResponse<ITyreCategory[]> } = await fetcher({
      url: `/tyreCategory?country_id=${id}`,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
