import CommonLayout from 'components/dashboard/CommonLayout';
import ShipmentReceipt from 'components/static-pages/shipment-receipt';

const Page = () => {
  return <ShipmentReceipt />;
};
export default Page;

Page.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
