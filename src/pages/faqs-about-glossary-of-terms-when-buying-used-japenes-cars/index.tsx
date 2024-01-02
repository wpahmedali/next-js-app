import CommonLayout from 'components/dashboard/CommonLayout';
import GlossaryTerms from 'components/static-pages/glossary-terms';

const Page = () => {
  return <GlossaryTerms />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
