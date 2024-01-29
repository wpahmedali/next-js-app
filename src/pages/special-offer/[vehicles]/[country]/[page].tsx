import { QueryClient } from 'react-query';
import { callReactQueryApis } from 'utils/call-react-query-apis';
import { withCSR } from 'react-query/hoc/with-CSR';
import { reactQuery } from 'src/common/constants';
import { getSpecialVehicleList } from 'react-query/api/special-vehicle-list';
import Listings from 'components/vehicle-listings';
import { siteSettings } from 'utils/siteSetting';
import { getDefaultProps, redirectToHome } from 'utils/return-functions';
import { getIdFromParam } from 'utils/get-id-from-param';
import { useRouterParams } from 'src/hooks/router-params';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();

  const params = useRouterParams(ctx.query);

  await queryClient.prefetchQuery(
    [
      reactQuery.vehicleList.tabular,
      params.countryId,
      params.page,
      params.perPage,
    ],
    () => getSpecialVehicleList(params.countryId, params.page, params.perPage)
  );

  const gridParams = {
    ...params,
    perPage: params.page * params.perPage,
    page: 1,
  };
  await queryClient.prefetchQuery(
    [
      reactQuery.vehicleList.grid,
      gridParams.countryId,
      gridParams.page,
      gridParams.perPage,
    ],
    () => getSpecialVehicleList(params.countryId, params.page, params.perPage)
  );

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
