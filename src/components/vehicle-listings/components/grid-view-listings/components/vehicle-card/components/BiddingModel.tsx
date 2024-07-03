import React from 'react';
import { getCountryIcon } from 'utils/get-country-icon';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';
import { useModelState, useSetContext } from 'src/providers/ModelContext';
import { IBiddingList } from 'src/interfaces/bidding-list.interface';

const BiddingListModel = ({
  data: vehicleData,
  biddingData: data,
  vehicleId,
}: {
  data: IVehicleDetail;
  biddingData: IBiddingList[];
  vehicleId: number;
}) => {
  const setContext = useSetContext();
  const modelState = useModelState();

  return (
    modelState === 'biddingListModel' &&
    vehicleId === vehicleData?.carId &&
    data?.length > 1 && (
      <>
        <div className="justify-center items-start flex overflow-x-hidden overflow-y-auto absolute top-0 inset-0 z-50 outline-none focus:outline-none">
          <div className="relative my-0 mx-auto w-full">
            <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-2 border-b border-solid border-blueGray-200">
                <h3 className="text-lg font-semibold">Bidding Detail</h3>
                <button
                  className="p-1 ml-auto  border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setContext('')}
                >
                  <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-2 flex-auto text-sm">
                {data?.map((item, i) => (
                  <div
                    key={i}
                    className="text-blueGray-500 leading-relaxed flex items-start gap-3 justify-items-start bg-gray-200 p-2"
                  >
                    {getCountryIcon(item.cssClass)}
                    <p>
                      <span className="font-bold">Bidder:</span>
                      {item?.userName}
                    </p>
                    <p>
                      <span className="font-bold">Bidding Price:</span>
                      <span className="text-red-600 font-bold">
                        {item?.bidPrice}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setContext('')}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    )
  );
};

export default BiddingListModel;
