import React from 'react';
import { Fragment } from 'react';

const StaticContent = () => {
  return (
    <Fragment>
      <div className="flex bg-black text-white justify-start items-center p-3 px-7 font-bold uppercase text-lg w-full gap-2">
        Used Tyres / Electronics / Auto Spare Parts / Engines Auction
      </div>
      <div className="bg-gray-100 text-xs text-black p-7">
        <div className="justify-between grid grid-flow-dense gap-2">
          <div className="text-lg">
            <p>
              Jan Japan is also dealing in Used Tyres, Electronics, Auto Spare
              Parts and Engines of all kinds. We are having auction on every
              Tuesday, Thursday and Sunday at our Sharjah Office for this.
              Please visit us or call us for further information.
            </p>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default StaticContent;
