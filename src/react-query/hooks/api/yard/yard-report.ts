import { useQuery } from 'react-query';
import { getYardReport } from 'react-query/api/yard/yard-report';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { IYardReportItem } from 'src/interfaces/yard-list.interface';

export const useYardReport = (params: ICarListParams) =>
  useQuery<IApiResponse<IYardReportItem[]>, Error>(
    ['yardReport', params.countryId, params.yardId],
    () => getYardReport(params)
  );
