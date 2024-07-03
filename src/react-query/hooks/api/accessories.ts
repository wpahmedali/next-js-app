import { useQuery } from 'react-query';
import { getAllAccessories } from 'react-query/api/vehicle/accessories';
import { IAccessories } from 'src/interfaces/accessories.interface';
import { IApiResponse } from 'src/interfaces/api-response.interface';

export const useAllAccessories = () =>
  useQuery<IApiResponse<IAccessories[]>, Error>(
    ['allAccessories'],
    getAllAccessories
  );
