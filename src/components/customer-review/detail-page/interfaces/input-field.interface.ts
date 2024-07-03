import { IWriteCustomerReview } from './write-customer-review.interface';

export interface IInputField {
  placeholder?: string;
  name?: string;
  value?: string;
  onChangeHandler?: (e: any) => void;
  error?: string;
  title?: string;
  setFormData?: any;
  formData?: IWriteCustomerReview;
}
