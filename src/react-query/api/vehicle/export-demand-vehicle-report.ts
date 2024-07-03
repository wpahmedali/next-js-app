import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { IExport } from 'src/interfaces/export.interface';
import { createQueryWithAllParams } from 'utils/create-queries';

export const exportDemandCarReport = async (
  params: ICarListParams
): Promise<IApiResponse<IExport | null>> => {
  try {
    const query = createQueryWithAllParams(params);

    const url = `/exportDemandCarReport`;

    const { data }: { data: IApiResponse<IExport> } = await fetcher({
      url: url + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
