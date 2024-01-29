export interface ICountryList {
  countryId: number;
  countriesToBeShown: number[];
}

export interface ISiteSetting {
  defaultCountryShown: boolean;
  specificCountriesShown: boolean;
  countryList: ICountryList[];
}