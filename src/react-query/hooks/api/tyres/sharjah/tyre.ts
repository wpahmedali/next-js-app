import { useQuery } from 'react-query';
import { getTyreSharjah } from 'react-query/api/tyres/sharjah/tyre';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ITyreSharjah } from 'src/interfaces/tyres/sharjah/tyre-sharjah.interface';

export const useTyreSharjah = (countryId: number) =>
  useQuery<IApiResponse<ITyreSharjah>, Error>(['tyreSharjah', countryId], () =>
    getTyreSharjah(countryId)
  );
