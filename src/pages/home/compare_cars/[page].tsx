import { QueryClient } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import FavouriteVehicleListings from 'components/favourite-vehicle-listings';
import { callReactQueryApisFavourite } from 'utils/call-react-query-apis-favourite';
import { siteSettings } from 'utils/siteSetting';
import { getDefaultProps, redirectToHome } from 'utils/return-functions';
import { getIdFromParam } from 'utils/get-id-from-param';
import { useRouterParams } from 'src/hooks/router-params';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();

  const params = useRouterParams(ctx.query);

  queryClient = await callReactQueryApisFavourite(queryClient, params);

  const { defaultCountryShown } = siteSettings;

  const routeCountryId =
    ctx.query.country && !Array.isArray(ctx.query.country)
      ? getIdFromParam(ctx.query.country)
      : 0;

  if (params.countryId !== routeCountryId && defaultCountryShown) {
    return redirectToHome(queryClient);
  } else {
    return getDefaultProps(queryClient);
  }
});

const Page = () => {
  return <FavouriteVehicleListings />;
};

export default Page;
