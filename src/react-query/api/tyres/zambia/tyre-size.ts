import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ITyreSize } from 'src/interfaces/tyres/zambia/tyre-size.interface';

export const getTyreSize = async (
  countryId: number,
  catId: number | null
): Promise<IApiResponse<ITyreSize[] | null>> => {
  let query = `?country_id=${countryId}`;
  query += catId ? `&tyre_cat_id=${catId}` : '';

  try {
    const { data }: { data: IApiResponse<ITyreSize[]> } = await fetcher({
      url: `/tyreSize` + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
