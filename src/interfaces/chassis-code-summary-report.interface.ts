import { IYears } from './maker-summary-report.interface';

export interface IChassisCodeSummaryReport {
  makerId: number;
  modelId: number;
  chassisCodeId: number;
  chassisCodeName: string;
  chassisCodeCount: number;
  years: IYears[];
  grandTotal: number;
  demond: number;
}
