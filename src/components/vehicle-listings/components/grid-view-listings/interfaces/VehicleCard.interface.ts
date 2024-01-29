export interface IEngineSpec {
  engineSize: number;
  registrationYear: number | string;
  registrationMonth: number | string;
  mileage: number;
  steeringName: string;
  transmissionName:string
}

export interface IBodySpec {
  modelName: string;
  colorName: string;
  driveName: string;
  fuelName: string;
  seats: number;
  doors: number;
  lotNo: string;
  carId: number;
}
