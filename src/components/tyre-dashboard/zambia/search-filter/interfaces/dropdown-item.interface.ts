import { FormEvent } from 'react';

export interface IDropdownItem {
  isChecked: boolean;
  id: number;
  name: string;
  handleCheck: (e: FormEvent<HTMLInputElement>) => void;
}
