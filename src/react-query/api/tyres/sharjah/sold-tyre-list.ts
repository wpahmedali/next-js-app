import fetcher from 'react-query/lib/axios';
import { vehiclePerPageList } from 'src/common/constants';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ISoldTyreList } from 'src/interfaces/tyres/sharjah/sold-tyre-list.interface';

export const getSoldTyreList = async (
  countryId: number,
  page: number,
  auctionId: number
): Promise<IApiResponse<ISoldTyreList | null>> => {
  const query = `?country_id=${countryId}&page=${page}&per_page=${vehiclePerPageList}&auction_id=${auctionId}`;

  try {
    const { data }: { data: IApiResponse<ISoldTyreList> } = await fetcher({
      url: '/tyreAuctionSharjah' + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
