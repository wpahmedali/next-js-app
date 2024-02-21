import { IWriteCustomerReview } from 'components/customer-review/detail-page/interfaces/write-customer-review.interface';
import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';

export const createCustomerReview = async (
  customerReviewData: FormData
): Promise<IApiResponse<IWriteCustomerReview | null>> => {
  try {
    const { data }: { data: IApiResponse<IWriteCustomerReview> } =
      await fetcher({
        url: '/addCustomerReview',
        method: 'POST',
        data: customerReviewData,
      });

    return data;
  } catch (error) {
    return null;
  }
};
