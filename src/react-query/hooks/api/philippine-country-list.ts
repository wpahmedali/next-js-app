import { useQuery } from 'react-query';
import { getPhilippineCountryList } from 'react-query/api/philippine-country-list';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IPhilippineCountryList } from 'src/interfaces/philippine-country-list.interface';

export const usePhilippineCountryList = (id: number) =>
  useQuery<IApiResponse<IPhilippineCountryList[]>, Error>(
    ['philippineCountryList', id],
    () => getPhilippineCountryList(id)
  );
