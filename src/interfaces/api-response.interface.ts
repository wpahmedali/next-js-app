export interface IApiResponse<T> {
  success: boolean;
  totalReview?: number;
  data: T;
  message: string;
}
