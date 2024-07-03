export interface IMakerModel {
  makerId: number;
  modelId: number;
}

export interface ICarListParams {
  countryId?: number;
  yardId?: number;
  isCountryFound?: boolean;
  fixPage?: number;
  page?: number;
  perPage?: number;
  customerReviewPerPage?: number;
  makerId?: string;
  modelId?: string;
  chassisCodeId?: string;
  makerModel?: IMakerModel[];
  bodyTypeId?: string;
  fromYear?: string;
  toYear?: string;
  engine?: string;
  year?: string;
  purchaseFromDate?: string;
  purchaseToDate?: string;
  steeringId?: string;
  transmissionId?: string;
  fuelId?: string;
  stockNo?: string;
  chassisNo?: string;
  pdDays?: string;
  etaCrossed?: string;
  dutyPaid?: string;
  noInspection?: string;
  searchKeyword?: string;
  isReserved?: string;

  carId?: number;
  currentCountryId?: number;
}
