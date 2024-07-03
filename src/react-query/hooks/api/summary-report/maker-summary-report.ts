import { useQuery } from 'react-query';
import { getMakerSummaryReport } from 'react-query/api/summary-report/maker-summary-report';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IMakerSummaryReport } from 'src/interfaces/maker-summary-report.interface';

export const useMakerSummaryReport = (countryId: string, type: string) =>
  useQuery<IApiResponse<IMakerSummaryReport[]>, Error>(
    ['fetchMakerSummaryReport', countryId, type],
    () => getMakerSummaryReport(countryId, type)
  );
