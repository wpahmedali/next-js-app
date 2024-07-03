import { ITyreFilters } from 'components/tyre-dashboard/zambia/search-filter/interfaces/filters.interface';
import { ParsedUrlQuery } from 'querystring';

export const getEmptyTyreFiltersData = (
  query: ParsedUrlQuery
): ITyreFilters => {
  const { tyreSize, keyword } = query;

  return {
    tyreSizeId: tyreSize && !Array.isArray(tyreSize) ? Number(tyreSize) : null,
    keyWord: keyword && !Array.isArray(keyword) ? keyword : '',
  };
};
