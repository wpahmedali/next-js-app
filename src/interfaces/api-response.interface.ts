export interface IApiResponse<T> {
  success: boolean;
  totalReview?: number;
  specialStock?: number;
  data: T;
  message: string;
}
