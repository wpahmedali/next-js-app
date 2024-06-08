import { IDropdownItem } from './dropdown-item.interface';

export interface IDropdownData {
  data: IDropdownItem[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}
