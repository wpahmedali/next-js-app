import { ICustomerReview } from './customer-review.interface';

export interface IPagination {
  total: number;
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
}

export interface ICustomerReviewList {
  reviewList: ICustomerReview[];
  pagination: IPagination;
}
