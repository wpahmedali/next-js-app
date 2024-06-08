export interface ILoginFormInput {
  inputlable: string;
  placeholder?: string;
  value: string;
  type: string;
  name: string;
  onChangeHandler: (e: any) => void;
  error: any;
}
