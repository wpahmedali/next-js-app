import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { IMakerModel } from 'src/interfaces/marker-model.interface';
import { createQueryParams } from 'utils/create-queries';

export const getMakerModel = async (
  params: ICarListParams
): Promise<IApiResponse<IMakerModel[] | null>> => {
  const query = createQueryParams(params);

  try {
    const { data }: { data: IApiResponse<IMakerModel[]> } = await fetcher({
      url: '/makeModel' + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
