import { ISiteSetting } from 'src/interfaces/site-setting.interface';
const data = require('../../public/country-list.json');

export const siteSettings: ISiteSetting = {
  defaultCountryShown: false,
  specificCountriesShown: false,
  countryList: data,
};
