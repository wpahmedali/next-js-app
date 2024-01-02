import { UaeFlagIcon } from 'icons';
import React, { Fragment } from 'react';

const ButtonLiveAuction = () => {
  return (
    <Fragment>
      <div className="bg-black overflow-hidden content-center text-primary justify-left text-left w-full md:my-2 sm:my-2 xs:my-2 xxs:my-2">
        <div className="bg-primaryDark text-white my-4 font-bold items-center justify-left gap-x-3 px-6">
        <UaeFlagIcon/> <div>Dubai Live Auction</div> <div><small>( 137-Units )</small></div>
          <div>05-06-2023 Time: 08:30:00 AM</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ButtonLiveAuction;
