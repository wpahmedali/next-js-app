import CompanyInfo from './components/CompanyInfo';
import HeadOffice from './components/HeadOffice';
import IFrame from './components/Iframe';

const JapanOffice = () => {
  return (
    <>
      <CompanyInfo />
      <section className="text-gray-600 body-font">
        <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
          <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-full">
            <HeadOffice />
            <IFrame />
          </div>
        </div>
      </section>
    </>
  );
};
export default JapanOffice;
