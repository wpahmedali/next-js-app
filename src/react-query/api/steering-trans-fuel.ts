import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ISteeringTransFuel } from 'src/interfaces/steering-trans-fuel.interface';

export const getSteeringTransFuel = async (): Promise<
  IApiResponse<ISteeringTransFuel | null>
> => {
  try {
    const { data }: { data: IApiResponse<ISteeringTransFuel> } = await fetcher({
      url: '/fetchSteeringTransFuel',
      method: 'GET',
    });
    return data;
  } catch (error) {
    return null;
  }
};
