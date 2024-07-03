import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IBodyType } from 'src/interfaces/body-type.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { createQueryParams } from 'utils/create-queries';

export const getBodyType = async (
  params: ICarListParams
): Promise<IApiResponse<IBodyType[] | null>> => {
  try {
    const query = createQueryParams(params);

    const { data }: { data: IApiResponse<IBodyType[]> } = await fetcher({
      url: `/bodyType` + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
