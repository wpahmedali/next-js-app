import fetcher from 'react-query/lib/axios';
import { IAccessories } from 'src/interfaces/accessories.interface';
import { IApiResponse } from 'src/interfaces/api-response.interface';

export const getAllAccessories = async (): Promise<any> => {
  try {
    const { data }: { data: IApiResponse<IAccessories[]> } = await fetcher({
      url: '/fetchAllAccessories',
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
