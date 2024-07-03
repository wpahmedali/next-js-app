import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IYearList } from 'src/interfaces/year-list.interface';

export const getYearList = async (
  countryId: string
): Promise<IApiResponse<IYearList[] | null>> => {
  try {
    const { data }: { data: IApiResponse<IYearList[]> } = await fetcher({
      url: `/fetchYearList?country_id=${countryId ? countryId : '0'}`,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
