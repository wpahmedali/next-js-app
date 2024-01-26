import CommonLayout from 'components/dashboard/CommonLayout';
import PartnersView from 'components/static-pages/over-view/partnersview';

const Page = () => {
  return <PartnersView />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
