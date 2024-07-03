import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ISiteCountryShown } from 'src/interfaces/fetchSiteCountryShown.interface';

export const getfetchSiteCountryShown = async (): Promise<
  IApiResponse<ISiteCountryShown[] | null>
> => {
  try {
    const { data }: { data: IApiResponse<ISiteCountryShown[]> } = await fetcher(
      {
        url: `/fetchSiteCountryShown`,
        method: 'GET',
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
