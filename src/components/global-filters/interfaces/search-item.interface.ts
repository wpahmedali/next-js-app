import { IDropdownData } from './dropdown-data.interface';
import { IFilters } from './filters.interface';

export interface ISearchItem {
  name: string;
  isYear: boolean;
  resetToggle: boolean;
  getSelectedData: (data: string[]) => void;
  selectedItems: string[];
  data: IDropdownData[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  updateFilters?: IFilters;
  setMinYear?: any;
}
