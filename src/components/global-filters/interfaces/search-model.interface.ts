import { IDropdownData } from './dropdown-data.interface';

export interface ISearchModel {
  updateFilters: (data: string[], key: string) => void;
  models: IDropdownData[];
  resetToggle: boolean;
}
