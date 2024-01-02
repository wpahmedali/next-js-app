import { dehydrate, QueryClient } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import { callReactQueryForVehicleDetailApis } from 'utils/call-react-query-apis-vehicle-detail';
import VehicleDetail from 'components/vehicle-detail';
import { useServerRouterParams } from 'src/hooks/server-router-params';

export const getServerSideProps = withCSR(async (ctx: any) => {
  let queryClient = new QueryClient();

  const params = await useServerRouterParams(ctx.query);

  queryClient = await callReactQueryForVehicleDetailApis(queryClient, params);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});

const Page = () => {
  return <VehicleDetail />;
};

export default Page;
