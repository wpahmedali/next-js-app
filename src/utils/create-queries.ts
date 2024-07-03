import { IFilters } from 'components/global-filters/interfaces/filters.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const createQueryParams = (params: ICarListParams): string => {
  let query = params?.countryId || params?.yardId ? '?' : '';
  query += params?.countryId ? `country_id=${params?.countryId}&` : '';
  query += params?.yardId ? `yard_id=${params?.yardId}&` : '';
  query += params?.isReserved === 'true' ? `is_reserved=1&` : '';

  query = query.slice(0, -1);
  return query;
};

export const createQueryWithAllParams = (params: ICarListParams): string => {
  let query = `?country_id=${params.countryId ? params.countryId : '0'}&page=${
    params.page ? params.page : '1'
  }&per_page=${params.perPage}&`;

  query += params.yardId ? `yard_id=${params.yardId}&` : '';
  query += params.makerId ? `maker_id=${params.makerId}&` : '';

  query += params.modelId
    ? `model_id=${
        params.makerModel && params.makerModel.length > 0
          ? JSON.stringify(params.makerModel)
          : params.modelId
      }&`
    : '';
  query += params.chassisCodeId
    ? `chassis_code_id=${params.chassisCodeId}&`
    : '';

  query += params.bodyTypeId ? `body_type_id=${params.bodyTypeId}&` : '';
  query += params.fromYear ? `from_year=${params.fromYear}&` : '';
  query += params.toYear ? `to_year=${params.toYear}&` : '';
  query += params.engine ? `engine=${params.engine}&` : '';
  query += params.year ? `year=${params.year}&` : '';

  query += params.purchaseFromDate
    ? `purchase_from_date=${params.purchaseFromDate}&`
    : '';
  query += params.purchaseToDate
    ? `purchase_to_date=${params.purchaseToDate}&`
    : '';

  query += params.steeringId ? `steering_id=${params.steeringId}&` : '';
  query += params.transmissionId
    ? `transmission_id=${params.transmissionId}&`
    : '';
  query += params.fuelId ? `fuel_id=${params.fuelId}&` : '';
  query += params.stockNo ? `stock_no=${params.stockNo}&` : '';
  query += params.chassisNo ? `chassis_no=${params.chassisNo}&` : '';

  query += params.pdDays ? `pd_days=${params.pdDays}&` : '';
  query += params.etaCrossed ? `eta_crossed=${params.etaCrossed}&` : '';
  query += params.dutyPaid ? `duty_paid=${params.dutyPaid}&` : '';
  query += params.noInspection ? `no_inspection=${params.noInspection}&` : '';
  query += params?.isReserved === 'true' ? `is_reserved=1&` : '';

  query += params.searchKeyword
    ? `search_keyword=${params.searchKeyword}&`
    : '';

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
  filters.stockNo
    ? true
    : false || filters.chassisNo
    ? true
    : false || filters.engine
    ? true
    : false || filters.year
    ? true
    : false || filters.purchaseDateFrom
    ? true
    : false || filters.purchaseDateTo
    ? true
    : false || filters.PDDay
    ? true
    : false || filters.ETACrossed
    ? true
    : false || filters.dutyPaid
    ? true
    : false || filters.noInspection
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

  query += filters.engine ? `engine=${filters.engine}&` : '';
  query += filters.year ? `year=${filters.year}&` : '';
  query += filters.stockNo ? `stock_no=${filters.stockNo}&` : '';
  query += filters.chassisNo ? `chassis_no=${filters.chassisNo}&` : '';

  query += filters.purchaseDateFrom
    ? `purchase_date_from=${filters.purchaseDateFrom}&`
    : '';
  query += filters.purchaseDateTo
    ? `purchase_date_to=${filters.purchaseDateTo}&`
    : '';

  query += filters.PDDay ? `pd_day=${filters.PDDay}&` : '';

  query += filters.ETACrossed ? `ETA_Crossed=${filters.ETACrossed}&` : '';
  query += filters.dutyPaid ? `Duty_Paid=${filters.dutyPaid}&` : '';
  query += filters.noInspection ? `No_Inspection=${filters.noInspection}&` : '';

  query = checkIfQueryExist(filters) ? query.slice(0, -1) : query;

  return query;
};

export const createNewPageQuery = (routerQuery: any): string => {
  let query: string = '?';

  query +=
    routerQuery?.country && routerQuery?.country !== 'all_stock'
      ? `country=${routerQuery.country.toString()}&`
      : '';
  query += routerQuery?.maker ? `maker=${routerQuery.maker.toString()}&` : '';
  query += routerQuery?.model ? `model=${routerQuery.model.toString()}&` : '';
  query += routerQuery?.yard ? `yard=${routerQuery.yard.toString()}&` : '';
  query += routerQuery?.carId ? `carId=${routerQuery.carId.toString()}&` : '';
  query += routerQuery?.isReserved === 'true' ? `is_reserved=1&` : '';

  query += routerQuery?.bodyType
    ? `bodyType=${routerQuery.bodyType.toString()}&`
    : '';

  query = query.slice(0, -1);

  return query;
};
