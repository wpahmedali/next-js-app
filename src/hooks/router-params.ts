import {
  emptyCarListParams,
  allModelsStr,
  vehiclePerPageList,
} from 'src/common/constants';
import { ParsedUrlQuery } from 'querystring';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { getIdFromParam } from 'utils/get-id-from-param';
import { useCountry } from 'react-query/hooks/api/country';
import { useCurrentLocation } from 'react-query/hooks/api/geo-location';

export const useRouterParams = ({
  country,
  auction,
  maker,
  model,
  bodyType,
  makers,
  models,
  body_types,
  from_year,
  to_year,
  steerings,
  transmissions,
  fuels,
  chassis_no,
  carId,
  page,
}: ParsedUrlQuery): ICarListParams => {
  const params = { ...emptyCarListParams };

  const { data: countryData } = useCountry();
  const { data: currentLocation } = useCurrentLocation();

  if (country && !Array.isArray(country) && country !== 'all_stock') {
    params.countryId = getIdFromParam(country);
  } else {
    if (country === 'all_stock') {
      params.countryId = 0;
    } else if (currentLocation && countryData) {
      const findCountry = countryData.data.find(
        (country) =>
          country.countryName.toLowerCase() ===
          currentLocation.country_name.toLowerCase()
      );
      params.countryId = findCountry ? findCountry.id : 0;
    }
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

  if (model && !Array.isArray(model) && model !== allModelsStr) {
    params.modelId = String(getIdFromParam(model) ? getIdFromParam(model) : '');
  }

  if (bodyType && !Array.isArray(bodyType)) {
    params.bodyTypeId = String(getIdFromParam(bodyType));
  }

  if (makers && !Array.isArray(makers)) {
    params.makerId = makers
      .split(',')
      .map((x) => getIdFromParam(x))
      .toString();
  }

  if (models && !Array.isArray(models)) {
    params.modelId = models
      .split(',')
      .map((x) => getIdFromParam(x))
      .toString();
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
