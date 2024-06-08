import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IGlobalContactDetail } from 'src/interfaces/global-contact-detail.interface';

export const getGlobalContactDetail = async (
  countryId: number
): Promise<IApiResponse<IGlobalContactDetail[] | null>> => {
  try {
    const { data }: { data: IApiResponse<IGlobalContactDetail[]> } =
      await fetcher({
        url: `/contactUs?country_id=${countryId}`,
        method: 'GET',
      });

    return data;
  } catch (error) {
    return null;
  }
};
