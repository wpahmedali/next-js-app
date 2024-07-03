import { useQuery } from 'react-query';
import { getTyreAddress } from 'react-query/api/tyres/zambia/tyre-address';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ITyreAddress } from 'src/interfaces/tyres/zambia/tyre-address.interface';

export const useTyreAddress = (countryId: number) =>
  useQuery<IApiResponse<ITyreAddress[]>, Error>(
    ['tyreAddress', countryId],
    () => getTyreAddress(countryId)
  );
