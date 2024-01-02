import { getBanner } from 'react-query/api/banner';
import { getBodyType } from 'react-query/api/body-type';
import { getCountry } from 'react-query/api/country';
import { getCustomerReview } from 'react-query/api/customer-review';
import getLocation from 'react-query/api/geo-location';
import { getMakerModel } from 'react-query/api/maker-model';
import { getSteeringTransFuel } from 'react-query/api/steering-trans-fuel';
import { getTyreSharjah } from 'react-query/api/tyres/sharjah/tyre';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const callReactQueryApisFavourite = async (
  queryClient: any,
  params: ICarListParams
) => {
  await queryClient.prefetchQuery(['userLocation'], getLocation);
  await queryClient.prefetchQuery(['country'], getCountry);
  await queryClient.prefetchQuery(['steeringTransFuel'], getSteeringTransFuel);
  await queryClient.prefetchQuery(
    ['makerModel', params.countryId, params.auctionId],
    () => getMakerModel(params.countryId, params.auctionId)
  );
  await queryClient.prefetchQuery(['banner', params.countryId], () =>
    getBanner(params.countryId)
  );
  await queryClient.prefetchQuery(
    ['bodyType', params.countryId, params.auctionId],
    () => getBodyType(params.countryId, params.auctionId)
  );
  await queryClient.prefetchQuery(['tyreSharjah', params.countryId], () =>
    getTyreSharjah(params.countryId)
  );
  const customerReviewParams = {
    ...params,
    page: 1,
  };
  await queryClient.prefetchQuery(
    [
      'customerReview',
      customerReviewParams.countryId,
      customerReviewParams.page,
      customerReviewParams.customerReviewPerPage,
    ],
    () =>
      getCustomerReview(
        customerReviewParams.countryId,
        customerReviewParams.page,
        customerReviewParams.customerReviewPerPage
      )
  );
  return queryClient;
};
