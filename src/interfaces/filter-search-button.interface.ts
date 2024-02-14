export interface IFilterSearchButton {
  handleOnKeyDown: () => void;
  resetButtonClick: () => void;
  dropdownState: string;
  setDropdownState: React.Dispatch<React.SetStateAction<string>>;
}
