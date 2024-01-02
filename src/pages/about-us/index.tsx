import CommonLayout from 'components/dashboard/CommonLayout';
import Profile from 'components/static-pages/Profile';

const AboutUs = () => {
  return <Profile />;
};

export default AboutUs;

AboutUs.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
