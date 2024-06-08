import { IDropdownData } from 'components/global-filters/interfaces/dropdown-data.interface';
import { FormEvent } from 'react';

export interface IDropdownItem {
  item: IDropdownData;
  isYear: boolean;
  yearType?: string;
  handleCheck: (event: FormEvent<HTMLInputElement>) => void;
}
