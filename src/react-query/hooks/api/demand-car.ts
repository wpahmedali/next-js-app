import { useQuery } from 'react-query';
import { getFetchDemandCars } from 'react-query/api/demand-cars/fetch-demand-cars';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IDemandCars } from 'src/interfaces/demand-cars.interface';

export const useFetchDemandCars = (
  countryId: number,
  purchaseFormDate: string,
  purchaseToDate: string
) =>
  useQuery<IApiResponse<IDemandCars[]>, Error>(
    ['demandCars', countryId, purchaseFormDate, purchaseFormDate],
    () => getFetchDemandCars(countryId, purchaseFormDate, purchaseToDate)
  );
