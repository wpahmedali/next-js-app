export interface ICarListParams {
  countryId: number | null;
  page: number | null;
  perPage: number | null;
  customerReviewPerPage?: number | null;
  makerId: string | null;
  modelId: string | null;
  bodyTypeId: string | null;
  fromYear: string | null;
  toYear: string | null;
  steeringId: string | null;
  transmissionId: string | null;
  fuelId: string | null;
  chassisNo: string | null;
  auctionId: number | null;
  carId: number | null;
  currentCountryId?: number | null;
}
