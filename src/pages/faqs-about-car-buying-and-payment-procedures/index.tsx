import CommonLayout from 'components/dashboard/CommonLayout';
import BuyingPaying from 'components/static-pages/buying-paying';

const Page = () => {
  return <BuyingPaying />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
