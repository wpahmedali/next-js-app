export interface IWriteCustomerReview {
  id?: number;
  country_id: number;
  car_id: string;
  maker_name: string;
  model_name: string;
  title: string;
  reviews: string;
  customer_name: string;
  email: string;
  customer_image: string;
  original_cust_image?: string;
  customer_thumbnail?: string;
  car_image: string;
  system_car_img?: string;
  car_image_thumbnail?: string;
  customer_video: string;
  review_rating: number;
  status?: number;
  created_at?: string;
  delete_state?: number;
  deleted_by?: number;
  status_by?: number;
}
