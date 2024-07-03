import React, { Fragment } from 'react';
import Image from 'next/image';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';
import { useCurrentCountry } from 'src/hooks/current-country';

const CarImages = ({ data }: { data: IVehicleDetail }) => {
  const SelectedCountry = useCurrentCountry();
  const isAuctionSheetDisplay = SelectedCountry?.isAuctionSheetDisplay === 1;

  return (
    <Fragment>
      <ul className="grid grid-cols-1 gap-4 mb-3">
        {data?.carImages?.map((item, i) => (
          <li key={i}>
            <Image
              alt="Car"
              className="items-center"
              src={item?.image}
              width={210}
              height={314}
            />
          </li>
        ))}
      </ul>
      {/* {data?.auctionSheet && isAuctionSheetDisplay && (
        <ul className="grid grid-cols-1 gap-4 mb-3">
          <li>
            <Image
              alt="Car"
              className="items-center"
              src={data?.auctionSheet}
              width={210}
              height={314}
            />
          </li>
        </ul>
      )} */}
    </Fragment>
  );
};
export default CarImages;
