import { QueryClient } from 'react-query';
import { callReactQueryApis } from 'utils/call-react-query-apis';
import Listings from 'components/vehicle-listings';
import { withCSR } from 'react-query/hoc/with-CSR';
import { useServerRouterParams } from 'src/hooks/server-router-params';
import { siteSettings } from 'utils/siteSetting';
import { getDefaultProps, redirectToHome } from 'utils/return-functions';
import { getIdFromParam } from 'utils/get-id-from-param';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();

  const params = await useServerRouterParams(ctx.query);

  queryClient = await callReactQueryApis(queryClient, params);

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
  return <Listings />;
};

export default Page;
