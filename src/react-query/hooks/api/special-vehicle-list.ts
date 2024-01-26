import { useQuery } from 'react-query';
import { getSpecialVehicleList } from 'react-query/api/special-vehicle-list';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IVehicleList } from 'src/interfaces/vehicle-list.interface';

export const useSpecialVehicleList = (
  view: string,
  countryId: number,
  pageNo: number,
  perPage: number
) =>
  useQuery<IApiResponse<IVehicleList>, Error>(
    [view, countryId, pageNo, perPage],
    () => getSpecialVehicleList(countryId, pageNo, perPage)
  );
