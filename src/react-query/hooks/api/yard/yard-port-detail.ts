import { useQuery } from 'react-query';
import { getYardPortDetail } from 'react-query/api/yard/yard-port-detail';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IYardPortDetailItem } from 'src/interfaces/yard-list.interface';

export const useYardPortDetail = (countryId?: number) =>
  useQuery<IApiResponse<IYardPortDetailItem[]>, Error>(
    ['yardPortDetail', countryId],
    () => getYardPortDetail(countryId)
  );
