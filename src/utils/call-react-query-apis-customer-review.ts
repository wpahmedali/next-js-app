import { getBodyType } from 'react-query/api/body-type';
import { getCountry } from 'react-query/api/country';
import { getCustomerReview } from 'react-query/api/customer-review';
import getLocation from 'react-query/api/geo-location';
import { getMakerModel } from 'react-query/api/maker-model';
import { getTyreSharjah } from 'react-query/api/tyres/sharjah/tyre';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const callReactQueryCustomerReviewApis = async (
  queryClient: any,
  params: ICarListParams
) => {
  await queryClient.prefetchQuery(['userLocation'], getLocation);
  await queryClient.prefetchQuery(['country'], getCountry);
  await queryClient.prefetchQuery(['tyreSharjah', params.countryId], () =>
    getTyreSharjah(params.countryId)
  );
  await queryClient.prefetchQuery(
    ['makerModel', params.countryId, params.auctionId],
    () => getMakerModel(params.countryId, params.auctionId)
  );
  await queryClient.prefetchQuery(
    ['bodyType', params.countryId, params.auctionId],
    () => getBodyType(params.countryId, params.auctionId)
  );
  await queryClient.prefetchQuery(
    ['customerReview', params.countryId, params.page, params.perPage],
    () => getCustomerReview(params.countryId, params.page, params.perPage)
  );
  return queryClient;
};
