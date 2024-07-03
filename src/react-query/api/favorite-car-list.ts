import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

export const getFavoriteCarsList = async (
  carIds: number[]
): Promise<IApiResponse<IVehicleDetail[] | null>> => {
  let url = `/favoriteCarList?carIds=[${carIds}]`;

  try {
    const { data }: { data: IApiResponse<IVehicleDetail[]> } = await fetcher({
      url,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
