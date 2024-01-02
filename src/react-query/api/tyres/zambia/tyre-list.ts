import fetcher from 'react-query/lib/axios';
import { vehiclePerPageList } from 'src/common/constants';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ITyreList } from 'src/interfaces/tyres/zambia/tyre-list.interface';

export const getTyreList = async (
  countryId: number,
  page: number,
  categoryId: number,
  tyreSizeId: number,
  keyWord: string
): Promise<IApiResponse<ITyreList | null>> => {
  let query = `?country_id=${countryId}&page=${page}&per_page=${vehiclePerPageList}&`;

  query += categoryId ? `tyre_cat_id=${categoryId}&` : '';
  query += tyreSizeId ? `tyre_size_id=${tyreSizeId}&` : '';
  query += keyWord ? `keyword=${keyWord}&` : '';

  query = query.slice(0, -1);

  try {
    const { data }: { data: IApiResponse<ITyreList> } = await fetcher({
      url: 'tyreList' + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
