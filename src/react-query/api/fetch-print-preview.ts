import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { IPosterList } from 'src/interfaces/poster-list.interface';
import { createQueryWithAllParams } from 'utils/create-queries';

export const getPrintPreview = async (
  params: ICarListParams
): Promise<IApiResponse<IPosterList | null>> => {
  const query = createQueryWithAllParams(params);

  const url = '/fetchPrintPreview';

  try {
    const { data }: { data: IApiResponse<IPosterList> } = await fetcher({
      url: url + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
