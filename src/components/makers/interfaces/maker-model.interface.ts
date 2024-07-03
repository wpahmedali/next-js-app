import { IMakerModelItem } from 'src/interfaces/marker-model.interface';

export interface IMakerModel {
  loadingMakerId: number;
  makerIsLoading: boolean;
  makerName: string;
  makerId: number;
  makerCount: number;
  image: string;
  isEven: boolean;
  models: IMakerModelItem[];
}
