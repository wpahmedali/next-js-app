import { ISizeDropdown } from './size-dropdown.interface';

export interface ISearchInput {
  allData: ISizeDropdown[];
  setDropdownData: (val: ISizeDropdown[]) => void;
}
