import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { IVehicleList } from 'src/interfaces/vehicle-list.interface';
import { createQueryWithAllParams } from 'utils/create-queries';

export const getVehicleList = async (
  params: ICarListParams
): Promise<IApiResponse<IVehicleList | null>> => {
  const query = createQueryWithAllParams(params);

  const url = '/carList';

  try {
    const { data }: { data: IApiResponse<IVehicleList> } = await fetcher({
      url: url + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
