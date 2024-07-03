import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { IYardReportItem } from 'src/interfaces/yard-list.interface';
import { createQueryParams } from 'utils/create-queries';

export const getYardReport = async (
  params: ICarListParams
): Promise<IApiResponse<IYardReportItem[] | null>> => {
  try {
    const query = createQueryParams(params);

    const url = `/yardsReportStockInJanJapan`;

    const { data }: { data: IApiResponse<IYardReportItem[]> } = await fetcher({
      url: url + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
