import CommonLayout from 'components/dashboard/CommonLayout';
import Documents from 'components/static-pages/documents';

const Page = () => {
  return <Documents />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
