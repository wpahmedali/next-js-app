import CommonLayout from 'components/dashboard/CommonLayout';
import GeneralQuestions from 'components/static-pages/general-questions';

const Page = () => {
  return <GeneralQuestions />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
