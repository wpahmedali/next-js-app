import { IWriteCustomerReview } from 'components/customer-review/detail-page/interfaces/write-customer-review.interface';
import fetcher from 'react-query/lib/axios';

export const createCustomerReview = async (
  customerReviewData: FormData
): Promise<IWriteCustomerReview | null> => {
  try {
    const { data }: { data: IWriteCustomerReview } = await fetcher({
      url: '/addCustomerReview',
      method: 'POST',
      data: customerReviewData,
    });

    return data;
  } catch (error) {
    return null;
  }
};
