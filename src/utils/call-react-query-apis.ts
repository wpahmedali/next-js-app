import { getAuction } from 'react-query/api/auctions/auction';
import { getBanner } from 'react-query/api/banner';
import { getBodyType } from 'react-query/api/body-type';
import { getCountry } from 'react-query/api/country';
import { getCustomerReview } from 'react-query/api/customer-review';
import getLocation from 'react-query/api/geo-location';
import { getMakerModel } from 'react-query/api/maker-model';
import { getNextPreviousCarList } from 'react-query/api/next-previous-car';
import { getSteeringTransFuel } from 'react-query/api/steering-trans-fuel';
import { getTyreSharjah } from 'react-query/api/tyres/sharjah/tyre';
import { getVehicleList } from 'react-query/api/vehicle-list';
import { reactQuery } from 'src/common/constants';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { ICountryApiRes } from 'src/interfaces/country.interface';

export const callReactQueryApis = async (
  queryClient: any,
  params: ICarListParams,
  isContact?: boolean
) => {
  await queryClient.prefetchQuery(['userLocation'], getLocation);
  const countrys = await queryClient.prefetchQuery(['country'], getCountry);

  // if (countrys) {
  //   const countries: ICountryApiRes = await getCountry();
  //   if (countries) {
  //     const findAuctionCountry = countries.data.find(
  //       (country) => country.auctionDisplay && country.id === params.countryId
  //     );
  //     if (findAuctionCountry) {
  //       await queryClient.prefetchQuery(['auction', params.countryId], () =>
  //         getAuction(params.countryId)
  //       );
  //     }
  //   }
  // }
  await queryClient.prefetchQuery(
    [
      'nextPreviousCar',
      params.countryId,
      params.makerId,
      params.modelId,
      params.bodyTypeId,
    ],
    () => getNextPreviousCarList(params)
  );
  await queryClient.prefetchQuery(['steeringTransFuel'], getSteeringTransFuel);
  // await queryClient.prefetchQuery(
  //   ['makerModel', params.countryId, params.auctionId],
  //   () => getMakerModel(params.countryId, params.auctionId)
  // );
  // await queryClient.prefetchQuery(['banner', params.countryId], () =>
  //   getBanner(params.countryId)
  // );
  // await queryClient.prefetchQuery(
  //   ['bodyType', params.countryId, params.auctionId],
  //   () => getBodyType(params.countryId, params.auctionId)
  // );

  // await queryClient.prefetchQuery(['tyreSharjah', params.countryId], () =>
  //   getTyreSharjah(params.countryId)
  // );

  // if (!isContact) {
  //   await queryClient.prefetchQuery(
  //     [reactQuery.vehicleList.tabular, params],
  //     () => getVehicleList(params)
  //   );

  //   const gridParams = {
  //     ...params,
  //     perPage: params.page * params.perPage,
  //     page: 1,
  //   };
  //   await queryClient.prefetchQuery(
  //     [reactQuery.vehicleList.grid, gridParams],
  //     () => getVehicleList(gridParams)
  //   );
  // }

  // const customerReviewParams = {
  //   ...params,
  //   page: 1,
  // };
  // await queryClient.prefetchQuery(
  //   [
  //     'customerReview',
  //     customerReviewParams.countryId,
  //     customerReviewParams.page,
  //     customerReviewParams.customerReviewPerPage,
  //   ],
  //   () =>
  //     getCustomerReview(
  //       customerReviewParams.countryId,
  //       customerReviewParams.page,
  //       customerReviewParams.customerReviewPerPage
  //     )
  // );
  return queryClient;
};
