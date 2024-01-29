import { dehydrate, QueryClient } from 'react-query';
import { callReactQueryApis } from 'utils/call-react-query-apis';
import Listings from 'components/vehicle-listings';
import { withCSR } from 'react-query/hoc/with-CSR';
import { useServerRouterParams } from 'src/hooks/server-router-params';
import getLocation from 'react-query/api/geo-location';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();

  await queryClient.prefetchQuery(['userLocation'], getLocation);

  const params = await useServerRouterParams(ctx.query);

  console.log('first======>', params.countryId);

  queryClient = await callReactQueryApis(queryClient, params);

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
