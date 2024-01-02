import CustomerReview from 'components/customer-review/detail-page';
import CustomerReviewLayout from 'components/customer-review/layout';

export const getServerSideProps = async (ctx: any) => {
  return {
    redirect: {
      destination: ctx.req.url + '/1',
      permanent: false,
    },
    props: {},
  };
};

const ReviewPage = () => {
  return <CustomerReview />;
};

export default ReviewPage;

ReviewPage.getLayout = function getLayout(page) {
  return <CustomerReviewLayout>{page}</CustomerReviewLayout>;
};
