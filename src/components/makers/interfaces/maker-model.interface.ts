import {
  IMakerModelChassisItem,
  IMakerModelItem,
} from 'src/interfaces/marker-model.interface';

export interface IMakerModel {
  loadingMakerId?: number;
  makerIsLoading?: boolean;
  makerName?: string;
  modelName?: string;
  modelCount?: string;
  makerId: number;
  modelId?: number;
  makerCount?: number;
  image?: string;
  isEven: boolean;
  models?: IMakerModelItem[];
  chassis?: IMakerModelChassisItem[];
  currentId?: number;
  setCurrentId?: any;
}
