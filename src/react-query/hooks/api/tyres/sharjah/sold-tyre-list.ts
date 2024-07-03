import { useQuery } from 'react-query';
import { getSoldTyreList } from 'react-query/api/tyres/sharjah/sold-tyre-list';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ISoldTyreList } from 'src/interfaces/tyres/sharjah/sold-tyre-list.interface';

export const useSoldTyreList = (
  countryId: number,
  page: number,
  auctionId: number
) =>
  useQuery<IApiResponse<ISoldTyreList>, Error>(
    ['soldTyreList', countryId, page, auctionId],
    () => getSoldTyreList(countryId, page, auctionId)
  );
