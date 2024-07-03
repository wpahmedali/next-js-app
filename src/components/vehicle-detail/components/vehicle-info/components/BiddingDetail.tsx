import React, { Fragment } from 'react';
import { getCountryIcon } from 'utils/get-country-icon';
import { useBiddingList } from 'react-query/hooks/api/bidding-list';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const BiddingDetail = ({ data }: { data: IVehicleDetail }): JSX.Element => {
  const { data: biddingData } = useBiddingList(
    data.lotNo,
    data.auctionCompanyId,
    data?.auctionDate
  );

  if (biddingData?.data?.length) {
    return (
      <Fragment>
        <div className="flex bg-primary text-black justify-start items-center p-2 text-sm">
          <div className="font-bold uppercase text-lg">Bidding Details </div>
        </div>

        <div className="bg-gray-100 text-xs font-bold text-black p-2 grid grid-cols-1 gap-1">
          {biddingData?.data?.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-white to-slate-200 border-solid border border-gray-400 border-l-4 p-2 flex gap-2 items-center"
            >
              <span className="flex items-center mr-2">
                {getCountryIcon(item.cssClass)}
              </span>
              <span>Bidder:</span>
              <span className="font-normal">{item.userName}</span>{' '}
              <span>Bidder Price:</span>
              <span className="text-red-600">{item.bidPrice}</span>
            </div>
          ))}
        </div>
      </Fragment>
    );
  } else {
    return;
  }
};

export default BiddingDetail;
