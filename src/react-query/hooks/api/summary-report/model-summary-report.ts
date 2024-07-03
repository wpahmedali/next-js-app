import { useQuery } from 'react-query';
import { getModelSummaryReport } from 'react-query/api/summary-report/model-summary-report';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IModelSummaryReport } from 'src/interfaces/model-summary-report.interface';

export const useModelSummaryReport = (
  countryId: string,
  type: string,
  makerId: string
) =>
  useQuery<IApiResponse<IModelSummaryReport[]>, Error>(
    ['fetchModelSummaryReport', countryId, type, makerId],
    () => getModelSummaryReport(countryId, type, makerId)
  );
