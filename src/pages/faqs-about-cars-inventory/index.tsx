import CommonLayout from 'components/dashboard/CommonLayout';
import Inventory from 'components/static-pages/inventory';

const Page = () => {
  return <Inventory />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
