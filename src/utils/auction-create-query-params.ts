import { vehiclePerPageList } from 'src/common/constants';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const createAuctionQueryParams = (
  countryId?: number,
  page?: number,
  perPage?: number
): string => {
  return `?page=${page ? page : '1'}&per_page=${
    perPage ? perPage : vehiclePerPageList
  }&country_id=${countryId}`;
};

export const createAuctionQueryWithAllParams = (
  params: ICarListParams
): string => {
  let query = `?country_id=${params.countryId ? params.countryId : '0'}&page=${
    params.page ? params.page : '1'
  }&per_page=${params.perPage ? params.perPage : vehiclePerPageList}&`;

  query += `${params.makerId ? 'maker_id=' + params.makerId + '&' : ''}`;
  query += `${params.modelId ? 'model_id=' + params.modelId + '&' : ''}`;
  query += `${
    params.bodyTypeId ? 'body_type_id =' + params.bodyTypeId + '&' : ''
  }`;

  query = query.slice(0, -1);

  return query;
};
