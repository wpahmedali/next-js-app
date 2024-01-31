import {
  emptyCarListParams,
  allModelsStr,
  vehiclePerPageList,
} from 'src/common/constants';
import { ParsedUrlQuery } from 'querystring';
import {
  ICarListParams,
  IMakerModel,
} from 'src/interfaces/car-list-param.interface';
import { getIdFromParam } from 'utils/get-id-from-param';
import { getMakerModel } from 'react-query/api/maker-model';
import getLocation from 'react-query/api/geo-location';
import { siteSettings } from 'utils/siteSetting';

export const useServerRouterParams = async (
  query,
  ip?: string
): Promise<ICarListParams> => {
  const {
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
  }: ParsedUrlQuery = query;

  const params = { ...emptyCarListParams };

  const { defaultCountryShown } = siteSettings;
  const { data: currentLocation } = await getLocation(ip);

  // country section start
  if (!country) {
    params.countryId = 0;
  }
  if (currentLocation && currentLocation?.id && defaultCountryShown) {
    params.countryId = currentLocation.id;
    params.isCountryFound = true;
  } else if (params.countryId && !defaultCountryShown) {
    params.countryId = params.countryId;
  }
  if (country === 'all_stock') {
    params.countryId = 0;
  }
  if (country && !Array.isArray(country) && country !== 'all_stock') {
    params.countryId = getIdFromParam(country);
  }
  // params.countryId = 14;
  // country section end

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

  const { data } = await getMakerModel(params.countryId, params.auctionId);

  if (models && !Array.isArray(models) && data) {
    const makerIdArr =
      makers && !Array.isArray(makers) ? makers.split(',') : [];
    const modelIdArr =
      models && !Array.isArray(models) ? models.split(',') : [];

    let makerModels: IMakerModel[] = [];

    // Scenario: Single maker, multiple models
    if (maker && !Array.isArray(maker)) {
      const foundMaker = data.find((item) => item.makerId === +params.makerId);
      makerModels = foundMaker.models
        .filter((item) =>
          modelIdArr.includes(`${item.modelName.toLowerCase()}-${item.modelId}`)
        )
        .map((item) => ({ makerId: item.carMakerId, modelId: item.modelId }));
    }

    // Scenario: Multiple makers, multiple models
    if (makers && !Array.isArray(makers)) {
      makerModels = data
        .filter((item) =>
          makerIdArr.includes(`${item.makerName.toLowerCase()}-${item.makerId}`)
        )
        .flatMap((item) => item.models)
        .filter((modelItem) =>
          modelIdArr.includes(
            `${modelItem.modelName.toLowerCase()}-${modelItem.modelId}`
          )
        )
        .map((modelItem) => ({
          makerId: modelItem.carMakerId,
          modelId: modelItem.modelId,
        }));
    }

    params.makerModel = makerModels;
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
