import { getfetchSiteCountryShown } from 'react-query/api/fetchSiteCountryShown';
import { ISiteSetting } from 'src/interfaces/site-setting.interface';

const fetchData = async () => {
  try {
    const data = await getfetchSiteCountryShown();
    return data?.data || [];
  } catch (error) {
    return [];
  }
};

export let siteSettings: ISiteSetting;

fetchData()
  .then((data) => {
    siteSettings = {
      defaultCountryShown: true,
      countryList: data,
    };
  })
  .catch((error) => {
    console.error('Error setting site settings:', error);
  });
