import { useQuery } from 'react-query';
import { getSteeringTransFuel } from 'react-query/api/steering-trans-fuel';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ISteeringTransFuel } from 'src/interfaces/steering-trans-fuel.interface';

export const useSteeringTransFuel = () =>
  useQuery<IApiResponse<ISteeringTransFuel>, Error>(
    ['steeringTransFuel'],
    getSteeringTransFuel
  );
