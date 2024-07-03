import { useQuery } from 'react-query';
import { getBiddingList } from 'react-query/api/fetch-bidding-list';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IBiddingList } from 'src/interfaces/bidding-list.interface';

export const useBiddingList = (
  lotNo: string,
  auctionCompanyId: number,
  auctionDate: string
) =>
  useQuery<IApiResponse<IBiddingList[]>, Error>(
    [lotNo, auctionCompanyId, auctionDate],
    () => getBiddingList(lotNo, auctionCompanyId, auctionDate)
  );
