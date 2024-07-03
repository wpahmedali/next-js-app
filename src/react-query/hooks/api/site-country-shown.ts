import { useQuery } from 'react-query';
import { getfetchSiteCountryShown } from 'react-query/api/fetch-site-country-shown';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ISiteCountryShown } from 'src/interfaces/fetchSiteCountryShown.interface';

export const useSiteCountryShown = () =>
  useQuery<IApiResponse<ISiteCountryShown[]>>(
    ['fetchSiteCountryShown'],
    getfetchSiteCountryShown
  );
