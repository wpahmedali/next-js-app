import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IPhilippineCountryList } from 'src/interfaces/philippine-country-list.interface';

export const getPhilippineCountryList = async (
  id: number
): Promise<IApiResponse<IPhilippineCountryList[] | null>> => {
  try {
    const { data }: { data: IApiResponse<IPhilippineCountryList[]> } =
      await fetcher({
        url: `/philippineCountryList?country_id=${id}`,
        method: 'GET',
      });

    return data;
  } catch (error) {
    return null;
  }
};
