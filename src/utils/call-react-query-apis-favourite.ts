import { getBanner } from 'react-query/api/banner';
import { getBodyType } from 'react-query/api/body-type';
import { getCountry } from 'react-query/api/country';
import { getCustomerReview } from 'react-query/api/customer-review';
import { getMakerModel } from 'react-query/api/maker-model';
import { getSteeringTransFuel } from 'react-query/api/steering-trans-fuel';
import { getSubCountryList } from 'react-query/api/sub-country-list';
import { getTyreSharjah } from 'react-query/api/tyres/sharjah/tyre';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const callReactQueryApisFavourite = async (
  queryClient: any,
  params: ICarListParams
) => {
  const promisesToFetch = [
    queryClient.prefetchQuery(['country'], getCountry),
    queryClient.prefetchQuery(
      ['subCountryList', params.pCountryId || params.countryId],
      () => getSubCountryList(params.pCountryId || params.countryId)
    ),
    queryClient.prefetchQuery(['steeringTransFuel'], getSteeringTransFuel),
    queryClient.prefetchQuery(
      ['makerModel', params.countryId, params.auctionId],
      () => getMakerModel(params.countryId, params.auctionId)
    ),
    queryClient.prefetchQuery(['banner', params.countryId], () =>
      getBanner(params.countryId)
    ),
    queryClient.prefetchQuery(
      ['bodyType', params.countryId, params.auctionId],
      () => getBodyType(params.countryId, params.auctionId)
    ),
    queryClient.prefetchQuery(['tyreSharjah', params.countryId], () =>
      getTyreSharjah(params.countryId)
    ),
    queryClient.prefetchQuery(
      [
        'customerReview',
        params.countryId,
        params.fixPage,
        params.customerReviewPerPage,
      ],
      () =>
        getCustomerReview(
          params.countryId,
          params.fixPage,
          params.customerReviewPerPage
        )
    ),
  ];

  await Promise.all(promisesToFetch);

  return queryClient;
};
