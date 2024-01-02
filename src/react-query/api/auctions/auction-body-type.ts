import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IBodyType } from 'src/interfaces/body-type.interface';

export const getAuctionBodyType = async (
  countryId: number,
  auctionId: number
): Promise<IApiResponse<IBodyType[] | null>> => {
  try {
    const { data }: { data: IApiResponse<IBodyType[]> } = await fetcher({
      url: `/auctionBodyType?country_id=${countryId}&auction_id=${auctionId}`,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
