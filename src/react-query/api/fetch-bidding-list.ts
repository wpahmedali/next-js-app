import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IBiddingList } from 'src/interfaces/bidding-list.interface';

export const getBiddingList = async (
  lotNo: string,
  auctionCompanyId: number,
  auctionDate: string
): Promise<IApiResponse<IBiddingList[] | null>> => {
  let query = `?lot_no=${lotNo ? lotNo : '0'}&auction_company_id=${
    auctionCompanyId ? auctionCompanyId : '0'
  }&auction_date=${auctionDate}`;

  try {
    const { data }: { data: IApiResponse<IBiddingList[]> } = await fetcher({
      url: '/fetchBiddingList' + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
