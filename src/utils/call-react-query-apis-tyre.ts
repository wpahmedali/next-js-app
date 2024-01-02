import { getCustomerReview } from 'react-query/api/customer-review';
import { getTyreAddress } from 'react-query/api/tyres/zambia/tyre-address';
import { getTyreCategory } from 'react-query/api/tyres/zambia/tyre-category';
import { getTyreList } from 'react-query/api/tyres/zambia/tyre-list';
import { getTyreSize } from 'react-query/api/tyres/zambia/tyre-size';

export const callReactQueryForTyreApis = async (
  queryClient: any,
  countryId: number,
  page: number,
  catId: number | null,
  tyreSizeId: number | null,
  keyWord: string | null,
  perPage: number | null
) => {
  await queryClient.prefetchQuery(['tyreCategory', countryId], () =>
    getTyreCategory(countryId)
  );

  await queryClient.prefetchQuery(
    ['tyreList', countryId, page, catId, tyreSizeId, keyWord],
    () => getTyreList(countryId, page, catId, tyreSizeId, keyWord)
  );

  await queryClient.prefetchQuery(['tyreAddress', countryId], () =>
    getTyreAddress(countryId)
  );

  await queryClient.prefetchQuery(['tyreSize', countryId, catId], () =>
    getTyreSize(countryId, catId)
  );

  await queryClient.prefetchQuery(
    ['customerReview', countryId, 1, perPage],
    () => getCustomerReview(countryId, 1, perPage)
  );

  return queryClient;
};
