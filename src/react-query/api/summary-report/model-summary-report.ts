import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IModelSummaryReport } from 'src/interfaces/model-summary-report.interface';

export const getModelSummaryReport = async (
  countryId: string,
  type: string,
  makerId: string
): Promise<IApiResponse<IModelSummaryReport[] | null>> => {
  let query = `?country_id=${countryId ? countryId : '0'}&`;
  query += type ? `types=${type}&` : '';
  query += makerId ? `make_id=${makerId}&` : '';
  query = query.slice(0, -1);

  try {
    const { data }: { data: IApiResponse<IModelSummaryReport[]> } =
      await fetcher({
        url: '/fetchModelSummaryReport' + query,
        method: 'GET',
      });

    return data;
  } catch (error) {
    return null;
  }
};
