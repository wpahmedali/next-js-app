import { ISiteSetting } from 'src/interfaces/site-setting.interface';
const data = require('../../public/special-country-list.json');

export const siteSettings: ISiteSetting = {
  defaultCountryShown: true,
  countryList: data,
};
