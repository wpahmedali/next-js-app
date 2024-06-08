import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IMakerModel } from 'src/interfaces/marker-model.interface';

export const getAuctionMakerModel = async (
  countryId: number,
  auctionId: number
): Promise<IApiResponse<IMakerModel[] | null>> => {
  try {
    const { data }: { data: IApiResponse<IMakerModel[]> } = await fetcher({
      url: `/auctionMakeModel?country_id=${countryId}&auction_id=${auctionId}`,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
