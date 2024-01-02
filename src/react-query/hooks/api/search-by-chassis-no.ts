import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ISearchByChassissNumber } from 'components/customer-review/detail-page/interfaces/chassis-no.interface';
import { ISearchByChassissNumberData } from 'src/interfaces/philippine-country-list.interface copy';
import { SearchByChassissNumber } from 'react-query/api/search-by-chassis-no';
import { useMutation } from 'react-query';

export const useSearchByChassisNo = (searchData: ISearchByChassissNumber) =>
  useMutation<IApiResponse<ISearchByChassissNumberData[]>, Error>(
    ['searchByChassisNo', searchData],
    () => SearchByChassissNumber(searchData)
  );
