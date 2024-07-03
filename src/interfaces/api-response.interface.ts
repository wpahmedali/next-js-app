export interface IApiResponse<T> {
  success: boolean;
  totalReview?: number;
  specialStock?: number;
  data: T;
  message: string;
}

export interface IApiResponseWithoutData {
  success: boolean;
  message: string;
}
