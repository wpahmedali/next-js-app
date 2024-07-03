export interface IMakerModel {
  makerId: number;
  makerName: string;
  cssClass: string;
  makerCount: number;
  models: IMakerModelItem[];
}

export interface IMakerModelItem {
  modelId: number;
  carMakerId: number;
  modelName: string;
  modelCount: number;
  chassisCodes: IMakerModelChassisItem[];
}

export interface IMakerModelChassisItem {
  chassisCodeId: number;
  chassisCodeName: string;
  chassisCodeCount: number;
}
