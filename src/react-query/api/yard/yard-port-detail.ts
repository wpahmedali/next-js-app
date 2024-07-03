import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IYardPortDetailItem } from 'src/interfaces/yard-list.interface';

export const getYardPortDetail = async (
  countryId?: number
): Promise<IApiResponse<IYardPortDetailItem[] | null>> => {
  try {
    const url = `/yardOnTheWayPortDetail?country_id=${
      countryId ? countryId : 0
    }`;

    const { data }: { data: IApiResponse<IYardPortDetailItem[]> } =
      await fetcher({
        url,
        method: 'GET',
      });

    return data;
  } catch (error) {
    return null;
  }
};
