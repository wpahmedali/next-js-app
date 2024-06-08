import { useQuery } from 'react-query';
import { getBodyType } from 'react-query/api/body-type';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IBodyType } from 'src/interfaces/body-type.interface';

export const useBodyType = (countryId: number, auctionId?: number) =>
  useQuery<IApiResponse<IBodyType[]>, Error>(
    ['bodyType', countryId, auctionId],
    () => getBodyType(countryId, auctionId)
  );
