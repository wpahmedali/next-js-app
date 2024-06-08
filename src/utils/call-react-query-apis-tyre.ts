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
  const promisesToFetch = [
    queryClient.prefetchQuery(['tyreCategory', countryId], () =>
      getTyreCategory(countryId)
    ),

    queryClient.prefetchQuery(
      ['tyreList', countryId, page, catId, tyreSizeId, keyWord],
      () => getTyreList(countryId, page, catId, tyreSizeId, keyWord)
    ),

    queryClient.prefetchQuery(['tyreAddress', countryId], () =>
      getTyreAddress(countryId)
    ),

    queryClient.prefetchQuery(['tyreSize', countryId, catId], () =>
      getTyreSize(countryId, catId)
    ),

    queryClient.prefetchQuery(['customerReview', countryId, 1, perPage], () =>
      getCustomerReview(countryId, 1, perPage)
    ),
  ];

  await Promise.all(promisesToFetch);

  return queryClient;
};
