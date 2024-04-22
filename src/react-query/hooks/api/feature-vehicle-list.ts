import { useQuery } from 'react-query';
import { getFeatureVehicleList } from 'react-query/api/feature-vehicle-list';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IVehicleList } from 'src/interfaces/vehicle-list.interface';

export const useFeatureVehicleList = (
  countryId: number,
  pageNo: number,
  perPage: number
) =>
  useQuery<IApiResponse<IVehicleList>, Error>(
    ['featureVehicleList', countryId, pageNo, perPage],
    () => getFeatureVehicleList(countryId, pageNo, perPage)
  );
