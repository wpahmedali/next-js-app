import { useQuery } from 'react-query';
import { getAvailableTyreList } from 'react-query/api/tyres/sharjah/available-tyre-list';
import { ISharjahTyreApiResponse } from 'src/interfaces/tyres/sharjah/tyre-api-response.interface';

export const useAvailableTyreList = (
  countryId: number,
  auctionId: number,
  auctionDate: string
) =>
  useQuery<ISharjahTyreApiResponse, Error>(
    ['availableTyreList', countryId, auctionId, auctionDate],
    () => getAvailableTyreList(countryId, auctionId, auctionDate)
  );
