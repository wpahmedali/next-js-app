import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';

const getLocation = async (): Promise<IApiResponse<{ id: number }>> => {
  try {
    const { data }: { data: IApiResponse<{ id: number }> } = await fetcher({
      url: '/geoLocation',
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};

export default getLocation;
