import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IChassisCodeSummaryReport } from 'src/interfaces/chassis-code-summary-report.interface';

export const getChassisCodeSummaryReport = async (
  countryId: string,
  type: string,
  carMakerId: string,
  carModelId: string
): Promise<IApiResponse<IChassisCodeSummaryReport[] | null>> => {
  let query = `?country_id=${countryId ? countryId : '0'}&`;
  query += type ? `types=${type}&` : '';
  query += carMakerId ? `car_maker_id=${carMakerId}&` : '';
  query += carModelId ? `car_model_id=${carModelId}&` : '';
  query = query.slice(0, -1);

  try {
    const { data }: { data: IApiResponse<IChassisCodeSummaryReport[]> } =
      await fetcher({
        url: '/fetchChassisCodeSummaryReport' + query,
        method: 'GET',
      });

    return data;
  } catch (error) {
    return null;
  }
};
