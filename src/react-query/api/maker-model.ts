import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IMakerModel } from 'src/interfaces/marker-model.interface';
import { createQueryParams } from 'utils/create-queries';

export const getMakerModel = async (
  countryId: number,
  auctionId: number
): Promise<IApiResponse<IMakerModel[] | null>> => {
  const query = createQueryParams(countryId, auctionId);

  const url = auctionId ? '/auctionMakeModel' : '/makeModel';

  try {
    const { data }: { data: IApiResponse<IMakerModel[]> } = await fetcher({
      url: url + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
