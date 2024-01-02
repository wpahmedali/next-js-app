import { useQuery } from 'react-query';
import { getAuction } from 'react-query/api/auctions/auction';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IAuction } from 'src/interfaces/auction.interface';

export const useAuction = (id: number) =>
  useQuery<IApiResponse<IAuction[]>, Error>(['auction', id], () =>
    getAuction(id)
  );
