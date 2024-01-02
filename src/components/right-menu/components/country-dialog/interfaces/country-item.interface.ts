import { ICountry } from 'src/interfaces/country.interface';

export interface ICountryItem {
  isPreviousData: boolean;
  item: ICountry;
  icon: JSX.Element;
  name: string;
  hideDialog: (type: string) => void;
}
