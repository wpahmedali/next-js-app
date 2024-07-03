import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

export interface IVehicleTabular {
  url: string;
  data: IVehicleDetail;
  isEven: boolean;
}
