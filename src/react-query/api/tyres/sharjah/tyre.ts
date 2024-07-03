import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ITyreSharjah } from 'src/interfaces/tyres/sharjah/tyre-sharjah.interface';

export const getTyreSharjah = async (
  countryId: number
): Promise<IApiResponse<ITyreSharjah | null>> => {
  try {
    const { data }: { data: IApiResponse<ITyreSharjah> } = await fetcher({
      url: `/tyreSharjah?country_id=${countryId}`,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
