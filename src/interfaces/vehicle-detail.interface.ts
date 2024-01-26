import { IVehicleDetailStaffMember } from './vehicle-detail-staff-members.interface';
import { IVehicleDetailImage } from './vehicle-detail-images.interface';
import { IVehicleDetailContactInfo } from './vehicle-detail-contact-info.interface';
import { IVehicleDetailStandardFeatures } from './vehicle-detail-standard-features.interface';
import { IVehicleDetailRecomendedCars } from './vehicle-detail-recomended-cars.interface';

export interface IVehicleDetail {
  carId: number;
  carImages?: IVehicleDetailImage[];
  RecomendedCars?: IVehicleDetailRecomendedCars[];
  contactInformation?: IVehicleDetailContactInfo[];
  standardFeatures?: IVehicleDetailStandardFeatures[];
  driveId: number;
  mileage: number;
  driveName: string;
  makerName: string;
  chassisNo: string;
  engineSize: number;
  registrationYear: number | string;
  registrationMonth: number | string;
  versionClass: string;
  engineCode: string;
  transmissionName: string;
  cityName: string;
  steeringName: string;
  fuelName: string;
  seats: number;
  doors: number;
  countryName: string;
  cssClass: string;
  modelCode: string;
  modelName: string;
  registeredTime: string;
  currencySymbol: string;
  carAccessories: string;
  interiorColor?: string;
  isSale: number;
  isDelivery?: number;
  promotionId: number;
  fuelId: number;
  fobPrice: number | string;
  discountPercentage: number;
  discountedPrice: number;
  saveAmtount: number;
  countryId: number;
  colorName: string;
  roroFreight: number;
  roroVanning: number;
  inspection: number;
  priceAsk: number;
  auctionId: number | string;
  lotNo: string;
  totalViews: number;
  staffMembers?: IVehicleDetailStaffMember[];
  imageUrl: string;
}
