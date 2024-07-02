import { useQuery } from 'react-query';
import { getDubaiSpecialVehicleList } from 'react-query/api/dubai-special-vehicle-list';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IVehicleList } from 'src/interfaces/vehicle-list.interface';

export const useDubaiSpecialVehicleList = (
  view: string,
  countryId: number,
  pageNo: number,
  perPage: number
) =>
  useQuery<IApiResponse<IVehicleList>, Error>(
    ['special', view, countryId, pageNo, perPage],
    () => getDubaiSpecialVehicleList(countryId, pageNo, perPage)
  );
