import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

export interface ITotal {
  totalCar: number;
}

export interface IPosterList {
  carList: IVehicleDetail[];
  total: ITotal;
}
