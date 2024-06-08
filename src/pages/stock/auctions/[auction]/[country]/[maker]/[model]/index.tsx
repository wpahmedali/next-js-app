import { dehydrate, QueryClient } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();

  return {
    redirect: {
      destination: ctx.req.url + '/1',
      permanent: false,
    },
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});

const Page = () => {
  return;
};

export default Page;
