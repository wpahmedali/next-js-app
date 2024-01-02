import { ParsedUrlQuery } from 'querystring';

export const getRequiredParam = (name: string, query: ParsedUrlQuery) => {
  const {
    maker,
    bodyType,
    makers,
    steerings,
    transmissions,
    fuels,
    from_year,
    body_types,
  } = query;

  switch (name) {
    case 'Maker':
      return !!(makers || maker);
    case 'Steering':
      return !!steerings;
    case 'Trans':
      return !!transmissions;
    case 'Fuel':
      return !!fuels;
    case 'Min Year':
      return !!from_year;
    case 'Body Type':
      return !!(body_types || bodyType);
    default:
      return false;
  }
};
