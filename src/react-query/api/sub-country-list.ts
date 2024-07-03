import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ISubCountryList } from 'src/interfaces/sub-country-list.interface';

export const getSubCountryList = async (
  id: number
): Promise<IApiResponse<ISubCountryList[] | null>> => {
  try {
    const { data }: { data: IApiResponse<ISubCountryList[]> } = await fetcher({
      url: `/subCountryList?country_id=${id}`,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
