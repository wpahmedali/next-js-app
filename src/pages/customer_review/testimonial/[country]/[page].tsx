import { QueryClient } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import CustomerReview from 'components/customer-review/detail-page';
import { callReactQueryCustomerReviewApis } from 'utils/call-react-query-apis-customer-review';
import CustomerReviewLayout from 'components/customer-review/layout';
import { useServerRouterParams } from 'src/hooks/server-router-params';
import { siteSettings } from 'utils/siteSetting';
import { getDefaultProps, redirectToHome } from 'utils/return-functions';
import { getIdFromParam } from 'utils/get-id-from-param';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();

  const params = await useServerRouterParams(ctx.query);

  queryClient = await callReactQueryCustomerReviewApis(queryClient, params);

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

const ReviewPage = () => {
  return <CustomerReview />;
};

export default ReviewPage;

ReviewPage.getLayout = function getLayout(page) {
  return <CustomerReviewLayout>{page}</CustomerReviewLayout>;
};
