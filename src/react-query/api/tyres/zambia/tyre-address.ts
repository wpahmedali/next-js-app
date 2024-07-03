import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ITyreAddress } from 'src/interfaces/tyres/zambia/tyre-address.interface';

export const getTyreAddress = async (
  countryId: number
): Promise<IApiResponse<ITyreAddress[] | null>> => {
  try {
    const { data }: { data: IApiResponse<ITyreAddress[]> } = await fetcher({
      url: `/tyreAddress?country_id=${countryId}`,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
