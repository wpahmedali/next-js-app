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
  const promisesToFetch = [
    queryClient.prefetchQuery(['userLocation'], getLocation),
    queryClient.prefetchQuery(['country'], getCountry),
    queryClient.prefetchQuery(['tyreSharjah', params.countryId], () =>
      getTyreSharjah(params.countryId)
    ),
    queryClient.prefetchQuery(
      ['makerModel', params.countryId, params.auctionId],
      () => getMakerModel(params.countryId, params.auctionId)
    ),
    queryClient.prefetchQuery(
      ['bodyType', params.countryId, params.auctionId],
      () => getBodyType(params.countryId, params.auctionId)
    ),
    queryClient.prefetchQuery(
      ['customerReview', params.countryId, params.page, params.perPage],
      () => getCustomerReview(params.countryId, params.page, params.perPage)
    ),
  ];

  await Promise.all(promisesToFetch);
  return queryClient;
};
