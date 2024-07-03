import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IVehicleDetailImage } from 'src/interfaces/vehicle-detail-images.interface';

export const getVehicleImages = async (
  vehicleId: string
): Promise<IApiResponse<IVehicleDetailImage[] | null>> => {
  try {
    const { data }: { data: IApiResponse<IVehicleDetailImage[]> } =
      await fetcher({
        url: `/fetchImagesByCarId?car_id=${vehicleId}`,
        method: 'GET',
      });

    return data;
  } catch (error) {
    return null;
  }
};
