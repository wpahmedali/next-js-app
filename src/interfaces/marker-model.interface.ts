export interface IMakerModelItem {
  carMakerId: number;
  modelCount: number;
  modelId: number;
  modelName: string;
}

export interface IMakerModel {
  makerId: number;
  makerName: string;
  cssClass: string;
  makerCount: number;
  models: IMakerModelItem[];
}
