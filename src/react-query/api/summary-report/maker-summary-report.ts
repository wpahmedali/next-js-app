import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IMakerSummaryReport } from 'src/interfaces/maker-summary-report.interface';

export const getMakerSummaryReport = async (
  countryId: string,
  type: string
): Promise<IApiResponse<IMakerSummaryReport[] | null>> => {
  let query = `?country_id=${countryId ? countryId : '0'}&`;
  query += type ? `types=${type}&` : '';
  query = query.slice(0, -1);

  try {
    const { data }: { data: IApiResponse<IMakerSummaryReport[]> } =
      await fetcher({
        url: '/fetchMakerSummaryReport' + query,
        method: 'GET',
      });

    return data;
  } catch (error) {
    return null;
  }
};
