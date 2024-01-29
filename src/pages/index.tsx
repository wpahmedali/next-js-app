import { dehydrate, QueryClient } from 'react-query';
import { callReactQueryApis } from 'utils/call-react-query-apis';
import Listings from 'components/vehicle-listings';
import { withCSR } from 'react-query/hoc/with-CSR';
import { useServerRouterParams } from 'src/hooks/server-router-params';
import getLocation from 'react-query/api/geo-location';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();

  const params = await useServerRouterParams(ctx.query);

  const ip_address =
    ctx.req.headers['x-real-ip'] || ctx.req.connection.remoteAddress;

  console.log('first,,ip', ip_address, typeof ip_address);

  queryClient = await callReactQueryApis(
    queryClient,
    params,
    false,
    !Array.isArray(ip_address) ? ip_address : ''
  );

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
