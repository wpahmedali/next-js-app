export interface ISignupFormInput {
  inputlable: string;
  value: string;
  type: string;
  name: string;
  onChangeHandler: (e: any) => void;
  error: any;
}
