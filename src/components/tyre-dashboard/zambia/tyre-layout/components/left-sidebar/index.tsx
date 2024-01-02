import React from 'react';
import TyreCategories from '../tyres-categories';

const LeftSidebar = () => {
  return (
    <div className="xxs:w-full xs:w-full sm:w-full 2xl:w-[375px] xl:w-[375px] lg:w-[375px] md:w-[300px] items-start justify-start z-30 sm:mb-0 xs:mb-0 xxs:mb-0">
      <TyreCategories />
    </div>
  );
};

export default LeftSidebar;
