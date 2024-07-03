
import Awards from './components/Awards';
import { Fragment } from 'react';
import TopImagesAwards from './components/TopImagesAwards';

const AwardsView = () => {
  return (
    <Fragment>
      <div id="overview">
        <TopImagesAwards />
        <div className="w-full ml-auto mr-auto">
          <Awards />
        </div>
      </div>
      
    </Fragment>
  );
};
export default AwardsView;
