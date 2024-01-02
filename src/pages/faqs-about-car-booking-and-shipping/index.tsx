import CommonLayout from 'components/dashboard/CommonLayout';
import BookingShipping from 'components/static-pages/booking-shipping';

const Page = () => {
  return <BookingShipping />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
