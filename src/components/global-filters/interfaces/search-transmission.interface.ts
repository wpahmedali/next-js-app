export interface ISearchTransmission {
  updateFilters: (data: string[], key: string) => void;
  resetToggle: boolean;
  dropdownState: string;
  setDropdownState: any;
}
