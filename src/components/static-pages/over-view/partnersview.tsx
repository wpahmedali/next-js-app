
import ShippingPartners from './components/ShippingPartners';
import { Fragment } from 'react';
import TopImagesPartners from './components/TopImagesPartners';

const PartnersView = () => {
  return (
    <Fragment>
      <div id="overview">
        <TopImagesPartners />
        <div className="w-full ml-auto mr-auto">
        <ShippingPartners/>
        </div>
      </div>
      
    </Fragment>
  );
};
export default PartnersView;
