import { IDropdownData } from './dropdown-data.interface';

export interface ISearchMaker {
  updateFilters: (data: string[], key: string) => void;
  setModels: (data: IDropdownData[]) => void;
  resetToggle: boolean;
}
