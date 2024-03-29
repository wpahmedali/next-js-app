import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';

const getLocation = async (
  ip_address?: string
): Promise<IApiResponse<{ id: number }>> => {
  try {
    const url = `/geoLocation?ip_address=${ip_address}`;
    const { data }: { data: IApiResponse<{ id: number }> } = await fetcher({
      url,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};

export default getLocation;
