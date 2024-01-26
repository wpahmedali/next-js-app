import { IFilters } from 'components/global-filters/interfaces/filters.interface';
import { ParsedUrlQuery } from 'querystring';

export const getEmptyFiltersData = (query: ParsedUrlQuery): IFilters => {
  const {
    makers,
    models,
    body_types,
    from_year,
    to_year,
    steerings,
    transmissions,
    fuels,
    stock_no,
    chassis_no,
  } = query;

  return {
    makers: makers && !Array.isArray(makers) ? makers.split(',') : [],
    models: models && !Array.isArray(models) ? models.split(',') : [],
    steerings:
      steerings && !Array.isArray(steerings) ? steerings.split(',') : [],
    trans:
      transmissions && !Array.isArray(transmissions)
        ? transmissions.split(',')
        : [],
    fuel: fuels && !Array.isArray(fuels) ? fuels.split(',') : [],
    minYear: from_year && !Array.isArray(from_year) ? [from_year] : [],
    maxYear: to_year && !Array.isArray(to_year) ? [to_year] : [],
    bodyTypes:
      body_types && !Array.isArray(body_types) ? body_types.split(',') : [],
    stockNo: stock_no && !Array.isArray(stock_no) ? stock_no : '',
    chassisNo: chassis_no && !Array.isArray(chassis_no) ? chassis_no : '',
  };
};
