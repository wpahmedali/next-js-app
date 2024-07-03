export interface IYardList {
  totaldCars: number;
  yardList: IYardItem[];
  totalRoroCars: number;
  roroDetail: [];
  totalReservedCars: number;
  reservedYard: IYardItem[];
}

export interface IYardItem {
  id: number;
  name: string;
  totalCar: number;
}

export interface IYardReportItem {
  yardId: number;
  auctionCompanyId: number;
  name: string;
  auctionCompanyNname: string;
  totalCar: number;
}

export interface IYardPortDetailItem {
  totalCar: number;
  destinationPortName: string;
}
