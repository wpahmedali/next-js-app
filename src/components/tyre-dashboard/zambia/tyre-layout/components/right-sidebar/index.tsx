import React from 'react';
import AvailableLocations from './components/available-locations';

const RightSidebar = () => {
  return (
    <div className="xxs:w-full xs:w-full sm:w-full 2xl:w-[375px] xl:w-[375px] lg:w-[375px] md:w-[300px] flex-col z-30">
      <div className="w-full">
        <AvailableLocations />
      </div>
    </div>
  );
};

export default RightSidebar;
