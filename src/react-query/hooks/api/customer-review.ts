import { useQuery } from 'react-query';
import { getCustomerReview } from 'react-query/api/customer-review';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICustomerReviewList } from 'src/interfaces/customer-reviews-list.interface';

export const useCustomerReview = (
  countryId: number,
  page: number,
  perPage: number
) =>
  useQuery<IApiResponse<ICustomerReviewList>, Error>(
    ['customerReview', countryId, page, perPage],
    () => getCustomerReview(countryId, page, perPage)
  );
