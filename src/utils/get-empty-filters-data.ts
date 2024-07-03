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
    engine,
    year,
    purchase_date_from,
    purchase_date_to,
    pd_day,
    ETA_Crossed,
    Duty_Paid,
    No_Inspection,
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

    engine: engine && !Array.isArray(engine) ? engine : '',
    year: year && !Array.isArray(year) ? year : '',
    purchaseDateFrom:
      purchase_date_from && !Array.isArray(purchase_date_from)
        ? purchase_date_from
        : '',
    purchaseDateTo:
      purchase_date_to && !Array.isArray(purchase_date_to)
        ? purchase_date_to
        : '',
    PDDay: pd_day && !Array.isArray(pd_day) ? pd_day : '',
    noInspection:
      No_Inspection && !Array.isArray(No_Inspection) ? No_Inspection : '',
    dutyPaid: Duty_Paid && !Array.isArray(Duty_Paid) ? Duty_Paid : '',
    ETACrossed: ETA_Crossed && !Array.isArray(ETA_Crossed) ? ETA_Crossed : '',
  };
};
