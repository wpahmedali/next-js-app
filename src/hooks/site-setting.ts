import { usefetchSiteCountryShown } from 'react-query/hooks/api/fetchSiteCountryShown';
import { ISiteSetting } from 'src/interfaces/site-setting.interface';

const fetchData = () => {
  const { data } = usefetchSiteCountryShown();
  return data?.data;
};

export const useSiteSettings: ISiteSetting = {
  defaultCountryShown: true,
  countryList: fetchData(),
};
