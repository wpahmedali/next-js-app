import { getBanner } from 'react-query/api/banner';
import { getBodyType } from 'react-query/api/body-type';
import { getCountry } from 'react-query/api/country';
import { getCustomerReview } from 'react-query/api/customer-review';
import { getDubaiSpecialVehicleList } from 'react-query/api/dubai-special-vehicle-list';
import { getMakerModel } from 'react-query/api/maker-model';
import { getSteeringTransFuel } from 'react-query/api/steering-trans-fuel';
import { getVehicleList } from 'react-query/api/vehicle-list';
import { reactQuery, uaeCountry } from 'src/common/constants';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const callReactQueryApis = async (
  queryClient: any,
  params: ICarListParams,
  isContact?: boolean
) => {
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
  const promisesToFetch = [
    queryClient.prefetchQuery(['country'], getCountry),
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
      ['customerReview', params.countryId, 1, params.customerReviewPerPage],
      () => getCustomerReview(params.countryId, 1, params.customerReviewPerPage)
    ),
  ];

  if (!isContact && params.countryId !== uaeCountry.id) {
    await queryClient.prefetchQuery(
      [reactQuery.vehicleList.tabular, params],
      () => getVehicleList(params)
    );

    const gridParams = {
      ...params,
      perPage: params.page * params.perPage,
      page: 1,
    };
    await queryClient.prefetchQuery(
      [reactQuery.vehicleList.grid, gridParams],
      () => getVehicleList(gridParams)
    );
  }

  if (params.countryId === uaeCountry.id) {
    await queryClient.prefetchQuery(
      [
        reactQuery.vehicleList.tabular,
        uaeCountry.id,
        params.page,
        params.perPage,
      ],
      () =>
        getDubaiSpecialVehicleList(uaeCountry.id, params.page, params.perPage)
    );

    const gridParams = {
      ...params,
      perPage: params.page * params.perPage,
      page: 1,
    };
    await queryClient.prefetchQuery(
      [
        reactQuery.vehicleList.grid,
        uaeCountry.id,
        gridParams.page,
        gridParams.perPage,
      ],
      () =>
        getDubaiSpecialVehicleList(
          uaeCountry.id,
          gridParams.page,
          gridParams.perPage
        )
    );
  }

  await Promise.all(promisesToFetch);

  return queryClient;
};
