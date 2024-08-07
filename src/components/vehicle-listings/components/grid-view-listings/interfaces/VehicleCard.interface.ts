import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

export interface IEngineSpec {
  engineSize: number;
  registrationYear: number | string;
  registrationMonth: number | string;
  mileage: number;
  steeringName: string;
  transmissionName: string;
}
