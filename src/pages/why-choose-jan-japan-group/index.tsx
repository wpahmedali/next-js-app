import CommonLayout from 'components/dashboard/CommonLayout';
import WhyJanGroup from 'components/static-pages/WhyJanGroup';

const Page = () => {
  return <WhyJanGroup />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
