import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

export const getVehicleDetail = async (
  countryId: number,
  vehicleId: number,
  maker?: string,
  model?: string,
  country?: string
): Promise<IApiResponse<IVehicleDetail | null>> => {
  try {
    let query = `?country_id=${countryId ? countryId : '0'}&`;
    query += country ? `country=${country}&` : '';
    query += maker ? `make=${maker}&` : '';
    query += model ? `model=${model}&` : '';
    query += vehicleId ? `car_id=${vehicleId}&` : '';
    query = query.slice(0, -1);

    const { data }: { data: IApiResponse<IVehicleDetail> } = await fetcher({
      url: `/carDetail` + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
