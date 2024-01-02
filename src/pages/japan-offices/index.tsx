import CommonLayout from 'components/dashboard/CommonLayout';
import JapanOffice from 'components/static-pages/japan-office';

const Page = () => {
  return <JapanOffice />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
