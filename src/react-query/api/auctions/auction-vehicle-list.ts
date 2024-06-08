import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { IVehicleList } from 'src/interfaces/vehicle-list.interface';
import { createAuctionQueryWithAllParams } from 'utils/auction-create-query-params';

export const getAuctionVehicleList = async (
  params: ICarListParams
): Promise<IApiResponse<IVehicleList | null>> => {
  const query = createAuctionQueryWithAllParams(params);

  try {
    const { data }: { data: IApiResponse<IVehicleList> } = await fetcher({
      url: `/auctionCarList${query}`,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
