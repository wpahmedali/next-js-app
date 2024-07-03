import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

export interface IPagination {
  total: number;
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
}

export interface IVehicleList {
  carList: IVehicleDetail[];
  pagination: IPagination;
}
