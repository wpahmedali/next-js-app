import React, { Fragment } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useSetContext } from 'src/providers/ModelContext';
import { useBiddingList } from 'react-query/hooks/api/bidding-list';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';
import BiddingListModel from './grid-view-listings/components/vehicle-card/components/BiddingModel';
import Tooltip from './Tooltip';
import { formatDateToYMD } from 'utils/formate-date';

const BiddingListButton = ({
  data,
  vehicleId,
  setVehicleId,
  tooltipVisible,
  setTooltipVisible,
}: {
  data: IVehicleDetail;
  vehicleId: number;
  setVehicleId?: any;
  tooltipVisible: string;
  setTooltipVisible: any;
}) => {
  const setContext = useSetContext();

  const { data: biddingData } = useBiddingList(
    data.lotNo,
    data.auctionCompanyId,
    data?.auctionDate || formatDateToYMD(String(data?.purDate))
  );

  const isDisabledBids = biddingData?.data?.length > 1;

  return (
    <Fragment>
      <BiddingListModel
        data={data}
        biddingData={biddingData?.data}
        vehicleId={vehicleId}
      />
      <Tooltip text="Bid Detail" visible={tooltipVisible === 'button1'}>
        <div
          className={`bg-red-500 rounded-full p-1 h-9 w-9 text-center items-center flex pl-1.5 relative ${
            !isDisabledBids ? 'cursor-not-allowed disabled' : 'cursor-pointer'
          }`}
          onMouseEnter={() => setTooltipVisible('button1')}
          onMouseLeave={() => setTooltipVisible('')}
          onClick={() => {
            setContext('biddingListModel');
            setVehicleId(data.carId);
          }}
        >
          <span className="text-xs text-white">Bids</span>
        </div>
      </Tooltip>
    </Fragment>
  );
};

export default BiddingListButton;
