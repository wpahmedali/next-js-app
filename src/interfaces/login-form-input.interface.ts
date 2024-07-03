export interface ILoginFormInput {
  placeholder?: string;
  value: string;
  type: string;
  name: string;
  onChangeHandler: (e: any) => void;
  error: any;
}
