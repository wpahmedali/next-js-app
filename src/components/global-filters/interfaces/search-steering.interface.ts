export interface ISearchSteering {
  updateFilters: (data: string[], key: string) => void;
  resetToggle: boolean;
  dropdownState: string;
  setDropdownState: any;
}
