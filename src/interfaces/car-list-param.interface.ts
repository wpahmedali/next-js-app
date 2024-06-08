export interface IMakerModel {
  makerId: number;
  modelId: number;
}

export interface ICarListParams {
  countryId: number | null;
  pCountryId: number | null;
  isCountryFound: boolean;
  fixPage: number;
  page: number | null;
  perPage: number | null;
  customerReviewPerPage?: number | null;
  makerId: string | null;
  modelId: string | null;
  makerModel?: IMakerModel[];
  bodyTypeId: string | null;
  fromYear: string | null;
  toYear: string | null;
  steeringId: string | null;
  transmissionId: string | null;
  fuelId: string | null;
  stockNo: string | null;
  chassisNo: string | null;
  auctionId: number | null;
  carId: number | null;
  currentCountryId?: number | null;
}
