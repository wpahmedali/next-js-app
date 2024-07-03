import TopImages from './components/TopImages';
import CoreBusiness from './components/CoreBusiness';
import CompanyInfo from './components/CompanyInfo';
import History from './components/History';
import OfficeNetwork from './components/OfficeNetwork';
import Awards from './components/Awards';
import ShippingPartners from './components/ShippingPartners';
import ArticleItem from './components/ArticleItem';
import Youtube1 from './components/youtube/Youtube1';
import Youtube2 from './components/youtube/Youtube2';
import Youtube3 from './components/youtube/Youtube3';
import { Fragment } from 'react';

const OverView = () => {
  return (
    <Fragment>
      <div id="overview">
        <TopImages />
        <div className="w-full ml-auto mr-auto">
          <CoreBusiness />
          <CompanyInfo />
          <History />
          <OfficeNetwork />
        </div>
      </div>
      
    </Fragment>
  );
};
export default OverView;
