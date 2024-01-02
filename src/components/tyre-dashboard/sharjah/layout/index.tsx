import CommonLayout from 'components/dashboard/CommonLayout';
import TyreBanner from './components/banner';
import StaticContent from './components/static-content';
import ContactInfo from './components/contact-info';
import GoogleMap from './components/google-map';
import TyreAuction from './components/tyre-auction';

const SharjahTyresLayout = ({ children }) => {
  return (
    <CommonLayout>
      <div className="mx-auto grid max-w-full grid-cols-12 gap-2">
        <div className="header col-span-12 rounded-lg border border-gray-30">
          <TyreBanner />
        </div>
        <div className="col-span-12 rounded-lg p-2 lg:col-span-4 sm:col-span-12">
          <ContactInfo />
        </div>
        <div className="col-span-12 rounded-lg p-2 lg:col-span-8 sm:col-span-12">
          <StaticContent />
          <GoogleMap />
        </div>
        <div className="footer col-span-12 rounded-lg border">
          <TyreAuction />
        </div>
        <div className="footer col-span-12 rounded-lg border">{children}</div>
      </div>
    </CommonLayout>
  );
};
export default SharjahTyresLayout;
