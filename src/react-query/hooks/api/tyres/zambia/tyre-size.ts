import { useQuery } from 'react-query';
import { getTyreSize } from 'react-query/api/tyres/zambia/tyre-size';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ITyreSize } from 'src/interfaces/tyres/zambia/tyre-size.interface';

export const useTyreSize = (countryId: number, catId: number | null) =>
  useQuery<IApiResponse<ITyreSize[]>, Error>(
    ['tyreSize', countryId, catId],
    () => getTyreSize(countryId, catId)
  );
