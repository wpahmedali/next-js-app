import { useQuery } from 'react-query';
import { getSubCountryList } from 'react-query/api/sub-country-list';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ISubCountryList } from 'src/interfaces/sub-country-list.interface';

export const useSubCountryList = (id: number) =>
  useQuery<IApiResponse<ISubCountryList[]>, Error>(['subCountryList', id], () =>
    getSubCountryList(id)
  );
