import { IFuel } from './fuel.interface';
import { ISteering } from './steering.interface';
import { ITransmission } from './transmission.interface';

export interface ISteeringTransFuel {
  steering: ISteering[];
  transmission: ITransmission[];
  fuel: IFuel[];
}
