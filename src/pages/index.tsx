import { dehydrate, QueryClient } from 'react-query';
import { callReactQueryApis } from 'utils/call-react-query-apis';
import Listings from 'components/vehicle-listings';
import { withCSR } from 'react-query/hoc/with-CSR';
import { useServerRouterParams } from 'src/hooks/server-router-params';
import getLocation from 'react-query/api/geo-location';
import { initGA } from 'utils/ga';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();

  const ip = ctx.req.headers['x-real-ip'] || ctx.req.connection.remoteAddress;

  const params = await useServerRouterParams(ctx.query, String(ip));

  await queryClient.prefetchQuery(['userLocation'], () =>
    getLocation(String(ip))
  );

  queryClient = await callReactQueryApis(queryClient, params);
  initGA();
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});

const Home = () => {
  return <Listings />;
};

export default Home;
