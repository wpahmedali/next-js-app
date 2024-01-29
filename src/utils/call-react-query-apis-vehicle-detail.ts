import { getBanner } from 'react-query/api/banner';
import { getBodyType } from 'react-query/api/body-type';
import { getCountry } from 'react-query/api/country';
import { getCustomerReview } from 'react-query/api/customer-review';
import getLocation from 'react-query/api/geo-location';
import { getMakerModel } from 'react-query/api/maker-model';
import { getNextPreviousCarList } from 'react-query/api/next-previous-car';
import { getPhilippineCountryList } from 'react-query/api/philippine-country-list';
import { getSteeringTransFuel } from 'react-query/api/steering-trans-fuel';
import { getTyreSharjah } from 'react-query/api/tyres/sharjah/tyre';
import { getVehicleDetail } from 'react-query/api/vehicle-detail';
import { philippineCountry, uaeCountry } from 'src/common/constants';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const callReactQueryForVehicleDetailApis = async (
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
    queryClient.prefetchQuery(
      [
        'nextPreviousCar',
        params.countryId,
        params.makerId,
        params.modelId,
        params.bodyTypeId,
      ],
      () => getNextPreviousCarList(params)
    ),
    queryClient.prefetchQuery(
      ['vehicleDetail', params.countryId, params.carId],
      () => getVehicleDetail(params.countryId, params.carId)
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

  if (params.countryId === uaeCountry.id) {
    promisesToFetch.push(
      queryClient.prefetchQuery(['tyreSharjah', params.countryId], () =>
        getTyreSharjah(params.countryId)
      )
    );
  }

  await Promise.all(promisesToFetch);

  return queryClient;
};
