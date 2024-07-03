import React from 'react';
import { Fragment } from 'react';
import AuctionButton from '../auction-button';
import { sharjahCountry } from 'components/tyre-dashboard/common/constants';
import { useTyreSharjah } from 'react-query/hooks/api/tyres/sharjah/tyre';
import Loading from 'components/loading';
import Error from 'components/error';

const TyreAuction = () => {
  const countryId = sharjahCountry.id;
  const { data, isLoading, isError, isSuccess } = useTyreSharjah(countryId);

  return (
    <Fragment>
      <div className="flex bg-primaryDark text-white justify-start items-center p-3 mt-2 px-7 font-bold uppercase text-lg w-full">
        Sharjah Auctions
      </div>
      <div className="bg-gray-100 text-xs font-bold text-black p-7">
        {isLoading && <Loading />}
        {(!data || isError) && !isLoading && <Error />}
        {isSuccess && data && (
          <Fragment>
            <div className="w-full justify-center grid grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 grid-rows-1 grid-flow-dense gap-2">
              {data.data.tyreLatestAuction.map((item) => (
                <AuctionButton
                  key={item.auctionId}
                  url={`/used-tyres/sharjah/sold/${item.auctionId}/1`}
                  loadingtype={'soldLoader'}
                  name={item.auctionName}
                  date={item.auctionDate}
                />
              ))}
            </div>
            <div className="w-full justify-center grid grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 grid-rows-1 grid-flow-dense gap-2">
              {data.data.incommingtAuctionDate.map((item) => (
                <AuctionButton
                  key={item.id}
                  url={`/used-tyres/sharjah/available/${item.id}`}
                  loadingtype={'availableLoader'}
                  name={item.auctionName}
                  date={item.date}
                  time={item.time}
                />
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default TyreAuction;
