import { ROUTES } from 'src/common/routes';
import { useCurrentCountryName } from './current-country-name';
import { useRouterParams } from './router-params';

export const GetBacklistingUrl = (router) => {
  const { country, maker, model, bodyType, auction } = router.query;
  const selectedCountry = useCurrentCountryName();
  const params = useRouterParams(router.query);

  const baseCountryUrl = country
    ? auction
      ? `/${params.countryId}`
      : `/${country}`
    : `/${
        params.countryId
          ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
          : ROUTES.ALL_STOCK
      }`;

  let finalUrl;
  if (auction) {
    if (params.makerId && params.modelId) {
      finalUrl = `${ROUTES.AUCTIONS}/${auction}${baseCountryUrl}/${maker}/${model}/1`;
    } else if (bodyType) {
      finalUrl = `${ROUTES.AUCTIONS}/${auction}${baseCountryUrl}/body-type/${bodyType}/1`;
    } else {
      finalUrl = `${ROUTES.AUCTION}/${auction}${baseCountryUrl}/1`;
    }
  } else {
    if (params.makerId && params.modelId) {
      finalUrl = `${ROUTES.USED_CARS}${baseCountryUrl}/${maker}/${model}/1`;
    } else if (bodyType) {
      finalUrl = `${ROUTES.USED_VEHICLES}${baseCountryUrl}/${bodyType}/1`;
    } else {
      finalUrl =
        country !== 'all_stock'
          ? `${ROUTES.COUNTRY_CAR_LIST}/${country}/1`
          : `${
              params.countryId
                ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
                : ROUTES.ALL_STOCK
            }/1`;
    }
  }
  return finalUrl;
};
