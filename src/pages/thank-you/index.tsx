import CommonLayout from 'components/dashboard/CommonLayout';
import ThankInquiry from 'components/static-pages/ThankInquiry';

const ThankYou = () => {
  return <ThankInquiry/>;

};

export default ThankYou;

ThankYou.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
