import { dehydrate, QueryClient } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import CustomerReview from 'components/customer-review/detail-page';
import { callReactQueryCustomerReviewApis } from 'utils/call-react-query-apis-customer-review';
import CustomerReviewLayout from 'components/customer-review/layout';
import { useServerRouterParams } from 'src/hooks/server-router-params';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();

  const params = await useServerRouterParams(ctx.query);

  queryClient = await callReactQueryCustomerReviewApis(queryClient, params);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});

const ReviewPage = () => {
  return <CustomerReview />;
};

export default ReviewPage;

ReviewPage.getLayout = function getLayout(page) {
  return <CustomerReviewLayout>{page}</CustomerReviewLayout>;
};
