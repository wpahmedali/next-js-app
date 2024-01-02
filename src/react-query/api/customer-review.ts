import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICustomerReviewList } from 'src/interfaces/customer-reviews-list.interface';

export const getCustomerReview = async (
  countryId: number,
  page: number,
  per_page: number
): Promise<IApiResponse<ICustomerReviewList | null>> => {
  try {
    const { data }: { data: IApiResponse<ICustomerReviewList> } = await fetcher(
      {
        url: `/customerReview?country_id=${countryId}&page=${page}&per_page=${per_page}`,
        method: 'GET',
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
