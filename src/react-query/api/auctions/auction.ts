import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IAuction } from 'src/interfaces/auction.interface';

export const getAuction = async (
  id: number
): Promise<IApiResponse<IAuction[] | null>> => {
  try {
    const { data }: { data: IApiResponse<IAuction[]> } = await fetcher({
      url: `/fetchAuctions?country_id=${id}`,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
