import { getBanner } from 'react-query/api/banner';
import { getBodyType } from 'react-query/api/body-type';
import { getCountry } from 'react-query/api/country';
import { getCustomerReview } from 'react-query/api/customer-review';
import getLocation from 'react-query/api/geo-location';
import { getMakerModel } from 'react-query/api/maker-model';
import { getPhilippineCountryList } from 'react-query/api/philippine-country-list';
import { getSteeringTransFuel } from 'react-query/api/steering-trans-fuel';
import { getTyreSharjah } from 'react-query/api/tyres/sharjah/tyre';
import { philippineCountry } from 'src/common/constants';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const callReactQueryApisFavourite = async (
  queryClient: any,
  params: ICarListParams
) => {
  await queryClient.prefetchQuery(['userLocation'], getLocation);

  const promisesToFetch = [
    queryClient.prefetchQuery(['country'], getCountry),
    queryClient.prefetchQuery(
      ['philippineCountryList', philippineCountry.id],
      getPhilippineCountryList(philippineCountry.id)
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
