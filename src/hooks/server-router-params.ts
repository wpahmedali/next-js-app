import {
  emptyCarListParams,
  allModelsStr,
  vehiclePerPageList,
} from 'src/common/constants';
import { ParsedUrlQuery } from 'querystring';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { getIdFromParam } from 'utils/get-id-from-param';
import { getCountry } from 'react-query/api/country';
import getLocation from 'react-query/api/geo-location';
import { siteSettings } from 'utils/siteSetting';

export const useServerRouterParams = async ({
  country,
  auction,
  maker,
  makers,
  model,
  models,
  bodyType,
  body_types,
  from_year,
  to_year,
  steerings,
  transmissions,
  fuels,
  stock_no,
  chassis_no,
  carId,
  page,
}: ParsedUrlQuery): Promise<ICarListParams> => {
  const params = { ...emptyCarListParams };

  const { defaultCountryShown } = siteSettings;

  // const { data: countryData } = await getCountry();
  // const currentLocation = await getLocation();

  if (country && !Array.isArray(country) && country !== 'all_stock') {
    params.countryId = getIdFromParam(country);
    params.isCountryFound = false;
  }
  // if (currentLocation && countryData) {
  //   const findCountry = countryData.find(
  //     (country) =>
  //       country.countryCode.toLowerCase() ===
  //       currentLocation?.geoplugin_countryCode?.toLowerCase()
  //   );
  //   if (findCountry) {
  //     params.countryId = findCountry.id;
  //     params.isCountryFound = true;
  //   } else if (params.countryId) {
  //     params.countryId = params.countryId;
  //     params.isCountryFound = false;
  //   } else {
  //     params.countryId = 0;
  //     params.isCountryFound = false;
  //   }
  // }
  if (
    country &&
    !Array.isArray(country) &&
    country !== 'all_stock' &&
    !defaultCountryShown
  ) {
    params.countryId = getIdFromParam(country);
    params.isCountryFound = false;
  }
  if (!country) {
    params.countryId = 0;
  }
  if (country === 'all_stock') {
    params.countryId = 0;
    params.isCountryFound = false;
  }

  if (carId && !Array.isArray(carId)) {
    params.carId = getIdFromParam(carId);
  } else {
    params.carId = 0;
  }

  if (auction && !Array.isArray(auction)) {
    params.auctionId = getIdFromParam(auction);
  }

  if (maker && !Array.isArray(maker)) {
    params.makerId = String(getIdFromParam(maker) ? getIdFromParam(maker) : '');
  }

  if (makers && !Array.isArray(makers)) {
    params.makerId = makers
      .split(',')
      ?.map((item) => getIdFromParam(item))
      .join(',');
  }

  if (model && !Array.isArray(model) && model !== allModelsStr) {
    params.modelId = String(getIdFromParam(model) ? getIdFromParam(model) : '');
  }

  if (models && !Array.isArray(models)) {
    params.modelId = models
      .split(',')
      ?.map((item) => getIdFromParam(item))
      .join(',');
  }

  if (bodyType && !Array.isArray(bodyType)) {
    params.bodyTypeId = String(getIdFromParam(bodyType));
  }

  if (body_types && !Array.isArray(body_types)) {
    params.bodyTypeId = body_types
      .split(',')
      .map((x) => getIdFromParam(x))
      .toString();
  }

  if (from_year && !Array.isArray(from_year)) {
    params.fromYear = from_year;
  }

  if (to_year && !Array.isArray(to_year)) {
    params.toYear = to_year;
  }

  if (steerings && !Array.isArray(steerings)) {
    params.steeringId = steerings
      .split(',')
      .map((x) => getIdFromParam(x))
      .toString();
  }

  if (transmissions && !Array.isArray(transmissions)) {
    params.transmissionId = transmissions
      .split(',')
      .map((x) => getIdFromParam(x))
      .toString();
  }

  if (fuels && !Array.isArray(fuels)) {
    params.fuelId = fuels
      .split(',')
      .map((x) => getIdFromParam(x))
      .toString();
  }

  if (stock_no && !Array.isArray(stock_no)) {
    params.stockNo = stock_no;
  }

  if (chassis_no && !Array.isArray(chassis_no)) {
    params.chassisNo = chassis_no;
  }

  if (page && !Array.isArray(page)) {
    params.page = parseInt(page);
  } else {
    params.page = 1;
  }

  params.perPage = vehiclePerPageList;
  params.customerReviewPerPage = 5;

  return params;
};
