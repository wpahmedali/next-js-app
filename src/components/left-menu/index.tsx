import BodyTypes from 'components/body-type';
import Makers from 'components/makers';
import React from 'react';

const LeftMenu = (): JSX.Element => {
  return (
    <div className="xxs:w-full xs:w-full sm:w-full 2xl:w-[375px] xl:w-[375px] lg:w-[375px] md:w-[300px] items-start justify-start sm:mb-0 xs:mb-0 xxs:mb-0 z-40">
      <Makers />
      <BodyTypes />
    </div>
  );
};

export default LeftMenu;
