import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IGeoLocation } from 'src/interfaces/geo-location.interface';

const getLocation = async (
  ip_address?: string
): Promise<IApiResponse<IGeoLocation>> => {
  try {
    const url = `/geoLocation${ip_address ? '?ip_address=' + ip_address : ''}`;
    const { data }: { data: IApiResponse<IGeoLocation> } = await fetcher({
      url,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return {
      success: false,
      data: { id: 0, ip_address: '' },
      message: 'error',
    };
  }
};

export default getLocation;
