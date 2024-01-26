import CommonLayout from 'components/dashboard/CommonLayout';
import OverView from 'components/static-pages/over-view';
import AwardsView from 'components/static-pages/over-view/awardsview';

const Page = () => {
  return <AwardsView />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
