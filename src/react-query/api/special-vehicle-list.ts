import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IVehicleList } from 'src/interfaces/vehicle-list.interface';

export const getSpecialVehicleList = async (
  countryId: number,
  pageNo: number,
  perPage: number
): Promise<IApiResponse<IVehicleList | null>> => {
  let query = `?country_id=${countryId ? countryId : '0'}&page=${
    pageNo ? pageNo : '1'
  }&per_page=${perPage}`;

  try {
    const { data }: { data: IApiResponse<IVehicleList> } = await fetcher({
      url: '/promotionCarList' + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
