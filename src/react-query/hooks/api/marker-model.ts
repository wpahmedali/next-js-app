import { useQuery } from 'react-query';
import { getMakerModel } from 'react-query/api/maker-model';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IMakerModel } from 'src/interfaces/marker-model.interface';

export const useMakerModel = (countryId: number, auctionId: number) =>
  useQuery<IApiResponse<IMakerModel[]>, Error>(
    ['makerModel', countryId, auctionId],
    () => getMakerModel(countryId, auctionId)
  );
