import fetcher from 'react-query/lib/axios';
import { ISharjahTyreApiResponse } from 'src/interfaces/tyres/sharjah/tyre-api-response.interface';

export const getAvailableTyreList = async (
  countryId: number,
  auctionId: number,
  auctionDate: string
): Promise<ISharjahTyreApiResponse | null> => {
  let query = `?country_id=${countryId}&auction_id=${auctionId}auction_date=${auctionDate}`;

  try {
    const { data }: { data: ISharjahTyreApiResponse } = await fetcher({
      url: '/tyreIncommingAuctionSharjah' + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
