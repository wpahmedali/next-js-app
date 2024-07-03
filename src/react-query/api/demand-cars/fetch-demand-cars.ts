import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IDemandCars } from 'src/interfaces/demand-cars.interface';

export const getFetchDemandCars = async (
  countryId: number,
  purchaseFormDate: string,
  purchaseToDate: string
): Promise<IApiResponse<IDemandCars[] | null>> => {
  let query = `?country_id=${countryId}${
    purchaseFormDate ? `&purchase_from_date=${purchaseFormDate}` : ''
  }${purchaseToDate ? `&purchase_to_date=${purchaseToDate}` : ''}`;

  try {
    const { data }: { data: IApiResponse<IDemandCars[]> } = await fetcher({
      url: '/fetchDemandCars' + query,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
