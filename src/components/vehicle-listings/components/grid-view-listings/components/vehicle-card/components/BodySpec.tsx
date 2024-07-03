import React from 'react';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const BodySpec = ({ data }: { data: IVehicleDetail }) => {
  return (
    <div className="3xl:min-h-[485px] 2xl:min-h-[467px] xl:min-h-[515px] lg:min-h-[522px] md:min-h-auto sm:h-auto">
      <h6 className="pl-2 py-0 block text-md font-bold uppercase bg-primary text-black">
        {data?.makerName} {data?.modelName}
      </h6>
      <h2 className="block text-xs my-1 px-2 font-bold"> {data?.chassisNo}</h2>
      {data?.colorName && (
        <p className="flex items-center gap-1.5 text-xs font-semibold text-black my-1 px-2">
          {data?.colorName}{' '}
          <span>
            {data.registrationYear} / {data.registrationMonth}
          </span>{' '}
          {data?.fuelName ? data.fuelName : ''}
        </p>
      )}
      <p className="flex items-center gap-1.5 text-xs font-normal text-black mt-1 px-2 border-t border-b bg-[#f0f8ff]">
        {data?.driveName ? data.driveName + ', ' : ''}
        {data?.doors ? data.doors + ' doors, ' : ''}
        {data?.seats ? data.seats + ' seats ' : ''}
        {data?.carAccessories ? data.carAccessories : ''}
      </p>

      {data?.M3 && (
        <p className="flex items-center gap-1.5 text-xs font-semibold px-2 py-1 text-black">
          M3: {data?.M3}
        </p>
      )}

      {data?.engCode && (
        <p className="flex items-center gap-1.5 text-xs font-semibold px-2 text-black justify-between">
          <span className="pr-2 pl-0">{data?.engCode}</span>
          <span className="px-2">{data.engineSize}cc</span>{' '}
          <span className="px-2">{data.mileage}km</span>
        </p>
      )}
      <p className="flex items-center gap-1.5 text-xs font-semibold px-2 text-black border-b justify-between">
        <span className="px-2">{data.transmissionName}</span>{' '}
        <span className="px-2">{data.steeringName}</span>
      </p>
      <div className="bg-[#f0f8ff]">
        <p className="flex items-center gap-1.5 text-xs font-semibold text-black my-1 px-2">
          <h2>Bidding:</h2>
        </p>
        {data?.bidderName && (
          <p className="flex items-center gap-1.5 text-xs px-2  text-black">
            {data?.bidderName}
          </p>
        )}

        {data?.Auction && (
          <p className="flex items-center gap-1.5 text-xs px-2  text-black">
            {data?.Auction}
          </p>
        )}

        {data?.bidMarket && (
          <p className="flex items-center gap-1.5 text-xs px-2  text-black">
            {data?.bidMarket}
          </p>
        )}
        <p className="flex items-center gap-1.5 text-xs px-2  text-black border-b">
          Bid: {data?.bidPrice}
        </p>
      </div>

      <p className="flex items-center gap-1.5 text-xs font-semibold text-black my-1 px-2">
        <h2>Purchase:</h2>
      </p>

      {data?.purchaseDate && (
        <p className="flex items-center text-xs font-semibold my-1 px-2">
          {data?.purchaseDate}
        </p>
      )}
      <div className="bg-[#f0f8ff]">
        <p className="flex items-center gap-1.5 text-xs font-semibold px-2  text-black border-t">
          <h2>Export</h2>
        </p>
        {data?.company && (
          <h2 className="block text-xs px-2">
            <span className="text-red-500 font-semibold">Company: </span>{' '}
            {data?.company}
          </h2>
        )}
        {data?.blNo && (
          <p className="flex items-center gap-1.5 text-xs font-semibold px-2 ">
            BL No: {data?.blNo}
          </p>
        )}

        {data?.futureDaysPassed && (
          <p className="my-1 px-2 block text-xs font-semibold">
            {data?.futureDaysPassed}
          </p>
        )}
        {data?.exportCertificateNo && (
          <p className="flex items-center gap-1.5 text-xs px-2 text-black">
            <span className="font-bold">Cert.No:</span>{' '}
            {data?.exportCertificateNo}
          </p>
        )}

        {data?.expiryDate && (
          <p className="flex items-center gap-1.5 text-xs px-2 text-black">
            <span className="font-bold">Expires On :</span> {data?.expiryDate}
          </p>
        )}

        <div className="text-xs flex gap-2 text-left text-black px-2 pb-1 border-b">
          <span className="font-bold">Recvd. On :</span>
          {data.receivingDate}
        </div>
      </div>
    </div>
  );
};

export default BodySpec;
