import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

export const getVehicleDetail = async (
  CountryId: number,
  vehicleId: number
): Promise<IApiResponse<IVehicleDetail | null>> => {
  try {
    const { data }: { data: IApiResponse<IVehicleDetail> } = await fetcher({
      url: `/carDetail?country_id=${CountryId}&car_id=${vehicleId}`,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
