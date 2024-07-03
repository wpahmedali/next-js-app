import { useQuery } from 'react-query';
import { getVehicleDetail } from 'react-query/api/vehicle/vehicle-detail';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

export const useVehicleDetail = (CountryId: number, vehicleId: number) =>
  useQuery<IApiResponse<IVehicleDetail>, Error>(
    ['vehicleDetail', CountryId, vehicleId],
    () => getVehicleDetail(CountryId, vehicleId)
  );
