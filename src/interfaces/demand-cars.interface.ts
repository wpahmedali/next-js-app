export interface IDemandCars {
  id: number;
  countryName: string;
  modelData: IModelData[];
  total: number;
}

export interface IModelData {
  name: string;
  pur: number;
}
