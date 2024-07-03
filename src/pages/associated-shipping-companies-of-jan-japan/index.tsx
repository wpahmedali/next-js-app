import CommonLayout from 'components/dashboard/CommonLayout';
import ShippingAgents from 'components/static-pages/shipping-agents';

const Page = () => {
  return <ShippingAgents />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
