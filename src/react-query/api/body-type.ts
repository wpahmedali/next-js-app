import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IBodyType } from 'src/interfaces/body-type.interface';

export const getBodyType = async (
  countryId: number,
  auctionId: number | null
): Promise<IApiResponse<IBodyType[] | null>> => {
  try {
    const url = auctionId
      ? `/auctionBodyType?country_id=${countryId}&auction_id=${auctionId}`
      : `/bodyType?country_id=${countryId ? countryId : 0}`;

    const { data }: { data: IApiResponse<IBodyType[]> } = await fetcher({
      url,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
