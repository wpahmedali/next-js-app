export interface IInputField {
  placeholder: string;
  name: string;
  value: string;
  onChangeHandler: (e: any) => void;
  error?: string;
}
