import React from 'react';
import { UaeFlagIcon, UaeMinFlagIcon } from 'icons';
import Link from 'next/link';
import { ITyreAuctionButton } from 'components/tyre-dashboard/sharjah/interfaces/tyre-auction-button.interface';
import { useDispatchLoadingState } from 'src/providers/LoadingContext';

const AuctionButton = ({
  url,
  loadingtype,
  name,
  date,
  time,
}: ITyreAuctionButton) => {
  const setLoadingState = useDispatchLoadingState();

  return (
    <Link onClick={() => setLoadingState({ type: loadingtype })} href={url}>
      <div
        className={`bg-black overflow-hidden content-center text-primary justify-left text-left w-full md:my-2 sm:my-2 xs:my-2 xxs:my-2`}
      >
        <div className="flex bg-primaryDark text-white my-4 font-bold items-center justify-left gap-x-3 px-6">
          <UaeFlagIcon />
          {name}
          <br></br>
          {date} {time ? time : ''}
        </div>
      </div>
    </Link>
  );
};

export default AuctionButton;
