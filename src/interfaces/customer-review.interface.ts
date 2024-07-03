export interface ICustomerReview {
  id: number;
  countryId: number;
  carId: string;
  makerName: string;
  modelName: string;
  title: string;
  reviews: string;
  customerName: string;
  customerImage: string;
  originalCustomerImage: string;
  customerThumbnail: string;
  carImage: string;
  carImageThumbnail: string;
  customerVideo: string;
  reviewRating: number;
  countryName: string;
  cssClass: string;
  createdAt: string;
}
