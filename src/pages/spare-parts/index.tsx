import CommonLayout from 'components/dashboard/CommonLayout';
import SpareParts from 'components/static-pages/spare-parts';

const Page = () => {
  return <SpareParts />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
