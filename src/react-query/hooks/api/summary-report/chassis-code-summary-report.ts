import { useQuery } from 'react-query';
import { getChassisCodeSummaryReport } from 'react-query/api/summary-report/chassis-code-summary-report';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IChassisCodeSummaryReport } from 'src/interfaces/chassis-code-summary-report.interface';

export const useChassisCodeSummaryReport = (
  countryId: string,
  type: string,
  carMakerId: string,
  carModelId: string
) =>
  useQuery<IApiResponse<IChassisCodeSummaryReport[]>, Error>(
    ['chassisCodeSummaryReport', countryId, type, carMakerId, carModelId],
    () => getChassisCodeSummaryReport(countryId, type, carMakerId, carModelId)
  );
