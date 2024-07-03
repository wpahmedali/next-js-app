import CommonLayout from 'components/dashboard/CommonLayout';
import OverView from 'components/static-pages/over-view';

const Page = () => {
  return <OverView />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
