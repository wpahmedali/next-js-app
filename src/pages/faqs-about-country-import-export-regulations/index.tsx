import CommonLayout from 'components/dashboard/CommonLayout';
import CountryRegulations from 'components/static-pages/country-regulations';

const Page = () => {
  return <CountryRegulations />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
