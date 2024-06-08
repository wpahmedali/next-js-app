import { useQuery } from 'react-query';
import { getGlobalContactDetail } from 'react-query/api/global-contact-detail';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IGlobalContactDetail } from 'src/interfaces/global-contact-detail.interface';

export const useGlobalContactDetail = (countryId: number) =>
  useQuery<IApiResponse<IGlobalContactDetail[]>, Error>(
    ['contactUsByCountry', countryId],
    () => getGlobalContactDetail(countryId)
  );
