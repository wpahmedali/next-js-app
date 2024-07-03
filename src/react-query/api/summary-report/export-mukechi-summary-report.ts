import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IExport } from 'src/interfaces/export.interface';

export const exportMukechiSummaryReport = async (
  countryId?: number
): Promise<IApiResponse<IExport | null>> => {
  try {
    const url = `/exportMukechiSummaryReport?country_id=${
      countryId ? countryId : 0
    }`;

    const { data }: { data: IApiResponse<IExport> } = await fetcher({
      url,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
