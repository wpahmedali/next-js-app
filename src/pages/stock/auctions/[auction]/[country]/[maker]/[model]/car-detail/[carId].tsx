import { QueryClient } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import { callReactQueryForVehicleDetailApis } from 'utils/call-react-query-apis-vehicle-detail';
import VehicleDetail from 'components/vehicle-detail';
import { useServerRouterParams } from 'src/hooks/server-router-params';
import { siteSettings } from 'utils/siteSetting';
import { getDefaultProps, redirectToHome } from 'utils/return-functions';
import { getIdFromParam } from 'utils/get-id-from-param';
import { useRouter } from 'next/router';
import { useVehicleDetailDynamicMetaData } from 'src/hooks/dynamic-meta-data';
import { Fragment } from 'react';
import Head from 'next/head';
import getLocation from 'react-query/api/geo-location';

export const getServerSideProps = withCSR(async (ctx: any) => {
  let queryClient = new QueryClient();

  const ip = ctx.req.headers['x-real-ip'] || ctx.req.connection.remoteAddress;

  const params = await useServerRouterParams(ctx.query, String(ip));

  await queryClient.prefetchQuery(['userLocation'], () =>
    getLocation(String(ip))
  );

  queryClient = await callReactQueryForVehicleDetailApis(queryClient, params);

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
  const scrollHieght = 270;
  const router = useRouter();
  const dynamicMetaData = useVehicleDetailDynamicMetaData(router);

  router?.events?.on('routeChangeComplete', () =>
    window?.scrollTo(0, scrollHieght)
  );

  return (
    <Fragment>
      <Head>
        <title>{dynamicMetaData?.title || "Jan's Group"}</title>
        {dynamicMetaData?.vehicleData?.map((item, i) => (
          <meta
            property={item?.property}
            content={item?.content?.toString()}
            key={i}
          />
        ))}
      </Head>
      <VehicleDetail />
    </Fragment>
  );
};

export default Page;
