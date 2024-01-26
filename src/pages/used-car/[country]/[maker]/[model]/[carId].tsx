import { QueryClient } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import { callReactQueryForVehicleDetailApis } from 'utils/call-react-query-apis-vehicle-detail';
import VehicleDetail from 'components/vehicle-detail';
import { useServerRouterParams } from 'src/hooks/server-router-params';
import { siteSettings } from 'utils/siteSetting';
import {
  getDefaultProps,
  redirectToCountry,
  redirectToHome,
} from 'utils/return-functions';
import { getIdFromParam } from 'utils/get-id-from-param';
import Head from 'next/head';
import { Fragment } from 'react';
import { useVehicleDetailDynamicMetaData } from 'src/hooks/dynamic-meta-data';
import { useRouter } from 'next/router';
import { getCountry } from 'react-query/api/country';

export const getServerSideProps = withCSR(async (ctx: any) => {
  let queryClient = new QueryClient();

  const routeCountryId =
    ctx.query.country && !Array.isArray(ctx.query.country)
      ? getIdFromParam(ctx.query.country)
      : 0;

  if (!routeCountryId) {
    return redirectToCountry(queryClient, ctx.query);
  }

  const params = await useServerRouterParams(ctx.query);

  queryClient = await callReactQueryForVehicleDetailApis(queryClient, params);

  const { defaultCountryShown } = siteSettings;

  if (params.countryId !== routeCountryId && defaultCountryShown) {
    return redirectToHome(queryClient);
  } else {
    return getDefaultProps(queryClient);
  }
});

const Page = () => {
  const router = useRouter();
  const dynamicMetaData = useVehicleDetailDynamicMetaData(router);
  return (
    <Fragment>
      <Head>
        <title>{dynamicMetaData?.title || "Jan's Group"}</title>
        {dynamicMetaData?.vehicleData?.map((item, i) => (
          <meta
            property={item.property}
            content={item.content.toString()}
            key={i}
          />
        ))}
      </Head>
      <VehicleDetail />
    </Fragment>
  );
};

export default Page;
