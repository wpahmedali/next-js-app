import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { INextPreviousVehicleList } from 'src/interfaces/vehicle-detail.interface copy';

export const getNextPreviousCarList = async (
  params: ICarListParams
): Promise<IApiResponse<INextPreviousVehicleList[] | null>> => {
  let query = `?country_id=${params.countryId ? params.countryId : '0'}&`;
  query += params.makerId ? `maker_id=${params.makerId}&` : '';
  query += params.modelId ? `model_id=${params.modelId}&` : '';
  query += params.bodyTypeId ? `body_type_id=${params.bodyTypeId}&` : '';
  query = query.slice(0, -1);

  try {
    const { data }: { data: IApiResponse<INextPreviousVehicleList[]> } =
      await fetcher({
        url: '/nextPreviousCar' + query,
        method: 'GET',
      });

    return data;
  } catch (error) {
    return null;
  }
};
