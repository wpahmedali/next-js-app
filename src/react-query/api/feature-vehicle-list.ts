import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IVehicleList } from 'src/interfaces/vehicle-list.interface';

export const getFeatureVehicleList = async (
  countryId: number,
  pageNo: number,
  perPage: number
): Promise<IApiResponse<IVehicleList | null>> => {
  let query = `?country_id=${countryId}&page=1&per_page=${pageNo * perPage}`;

  try {
    const { data }: { data: IApiResponse<IVehicleList> } = await fetcher({
      url: '/countryFeaturesCars' + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
