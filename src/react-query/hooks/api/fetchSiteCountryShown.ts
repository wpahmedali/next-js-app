import { useQuery } from 'react-query';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { getfetchSiteCountryShown } from 'react-query/api/fetchSiteCountryShown';
import { ISiteCountryShown } from 'src/interfaces/fetchSiteCountryShown.interface';

export const usefetchSiteCountryShown = () =>
  useQuery<IApiResponse<ISiteCountryShown[]>, Error>(
    ['fetchSiteCountryShown'],
    getfetchSiteCountryShown
  );
