import { IFilters } from 'components/global-filters/interfaces/filters.interface';
import { vehiclePerPageList } from 'src/common/constants';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const createQueryParams = (
  countryId?: number,
  auctionId?: number
): string => {
  let query = countryId || auctionId ? '?' : '';
  query += countryId ? `country_id=${countryId}&` : '';
  query += auctionId ? `auction_id=${auctionId}&` : '';
  query = query.slice(0, -1);
  return query;
};

export const createQueryWithAllParams = (params: ICarListParams): string => {
  let query = `?country_id=${params.countryId ? params.countryId : '0'}&
              page=${params.page ? params.page : '1'}&
              per_page=${params.perPage}&`;

  query += params.auctionId ? `auction_id=${params.auctionId}&` : '';
  query += params.makerId ? `maker_id=${params.makerId}&` : '';
  query += params.modelId ? `model_id=${params.modelId}&` : '';
  query += params.bodyTypeId ? `body_type_id=${params.bodyTypeId}&` : '';

  query += params.fromYear ? `from_year=${params.fromYear}&` : '';
  query += params.toYear ? `to_year=${params.toYear}&` : '';
  query += params.steeringId ? `steering_id=${params.steeringId}&` : '';
  query += params.transmissionId
    ? `transmission_id=${params.transmissionId}&`
    : '';
  query += params.fuelId ? `fuel_id=${params.fuelId}&` : '';
  query += params.chassisNo ? `chassis_no=${params.chassisNo}&` : '';

  query = query.slice(0, -1);

  return query;
};

const checkIfQueryExist = (filters: IFilters): boolean =>
  filters.makers.length > 0 ||
  filters.models.length > 0 ||
  filters.bodyTypes.length > 0 ||
  filters.minYear.length > 0 ||
  filters.maxYear.length > 0 ||
  filters.steerings.length > 0 ||
  filters.trans.length > 0 ||
  filters.fuel.length > 0 ||
  filters.chassisNo
    ? true
    : false;

export const createFilterQuery = (filters: IFilters): string => {
  let query = checkIfQueryExist(filters) ? '?' : '';

  query +=
    filters.makers.length > 0 ? `makers=${filters.makers.toString()}&` : '';
  query +=
    filters.models.length > 0 ? `models=${filters.models.toString()}&` : '';
  query +=
    filters.bodyTypes.length > 0
      ? `body_types=${filters.bodyTypes.toString()}&`
      : '';

  query +=
    filters.minYear.length > 0
      ? `from_year=${filters.minYear.toString()}&`
      : '';
  query +=
    filters.maxYear.length > 0 ? `to_year=${filters.maxYear.toString()}&` : '';
  query +=
    filters.steerings.length > 0
      ? `steerings=${filters.steerings.toString()}&`
      : '';
  query +=
    filters.trans.length > 0
      ? `transmissions=${filters.trans.toString()}&`
      : '';
  query += filters.fuel.length > 0 ? `fuels=${filters.fuel.toString()}&` : '';
  query += filters.chassisNo ? `chassis_no=${filters.chassisNo}&` : '';

  query = checkIfQueryExist(filters) ? query.slice(0, -1) : query;

  return query;
};
