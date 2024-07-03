import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IYardList } from 'src/interfaces/yard-list.interface';

export const getYardList = async (
  countryId: number
): Promise<IApiResponse<IYardList | null>> => {
  try {
    const url = `/yardList?country_id=${countryId ? countryId : 0}`;

    const { data }: { data: IApiResponse<IYardList> } = await fetcher({
      url,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
