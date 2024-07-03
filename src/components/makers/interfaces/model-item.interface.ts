import { IMakerModelItem } from 'src/interfaces/marker-model.interface';

export interface IModelItem {
  modelIsLoading: boolean;
  item: IMakerModelItem;
  makerId: number;
  makerName: string;
  isEven: boolean;
  currentModelId: number;
  setCurrentModelId: any;
  setCurrentId: any;
}
