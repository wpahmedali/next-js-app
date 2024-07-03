export interface IMakerSummaryReport {
  makerId: number;
  makerName: string;
  cssClass: string;
  makerCount: number;
  years: IYears[];
  grandTotal: number;
  demond: number;
}

export interface IYears {
  year: string;
  yearCount: number;
}
