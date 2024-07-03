import { IYears } from './maker-summary-report.interface';

export interface IModelSummaryReport {
  makerId: number;
  modelId: number;
  modelName: string;
  modelCount: number;
  years: IYears[];
  grandTotal: number;
  demond: string;
}
