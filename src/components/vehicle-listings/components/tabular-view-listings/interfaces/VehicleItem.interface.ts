import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

export interface IVehicleTabular {
  special?: boolean;
  url: string;
  data: IVehicleDetail;
  isEven: boolean;
}
