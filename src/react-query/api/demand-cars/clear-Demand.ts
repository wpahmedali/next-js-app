import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';

export const getClearDemand = async (
  countryId: string
): Promise<IApiResponse<'' | null>> => {
  try {
    const { data }: { data: IApiResponse<''> } = await fetcher({
      url: `/clearDemand?country_id=${countryId ? countryId : '0'}`,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
