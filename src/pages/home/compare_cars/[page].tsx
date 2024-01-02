import { dehydrate, QueryClient } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import FavouriteVehicleListings from 'components/favourite-vehicle-listings';
import { callReactQueryApisFavourite } from 'utils/call-react-query-apis-favourite';
import { useServerRouterParams } from 'src/hooks/server-router-params';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();

  const params = await useServerRouterParams(ctx.query);

  queryClient = await callReactQueryApisFavourite(queryClient, params);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});

const Page = () => {
  return <FavouriteVehicleListings />;
};

export default Page;
