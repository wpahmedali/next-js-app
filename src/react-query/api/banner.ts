import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IBanner } from 'src/interfaces/banner.interface';

export const getBanner = async (
  id: number
): Promise<IApiResponse<IBanner[] | null>> => {
  try {
    const { data }: { data: IApiResponse<IBanner[]> } = await fetcher({
      url: `/bannerList?country_id=${id}`,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
