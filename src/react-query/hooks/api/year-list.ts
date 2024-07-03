import { useQuery } from 'react-query';
import { getYearList } from 'react-query/api/fetch-year-list';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IYearList } from 'src/interfaces/year-list.interface';

export const useYearList = (country: string) =>
  useQuery<IApiResponse<IYearList[]>, Error>(['yearList', country], () =>
    getYearList(country)
  );
