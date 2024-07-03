import { getCountryIcon } from 'utils/get-country-icon';
import { FavIcon, SteeringIcon, WhatsappIcon } from 'icons';
import React, { useEffect, useRef, useState } from 'react';
import { useFavoriteCars } from 'src/providers/FavouriteVehicleList';
import { notify } from 'utils/toast';
import Image from 'next/image';
import { IVehicleTabular } from '../interfaces/VehicleItem.interface';
import BiddingListModel from '../../grid-view-listings/components/vehicle-card/components/BiddingModel';
import { useSetContext } from 'src/providers/ModelContext';
import { useBiddingList } from 'react-query/hooks/api/bidding-list';
import VehicleActionButtons from './VehicleActionButtons';

import Link from 'next/link';
import { listingLoaderImage } from 'src/common/listing-loader-image';
import { NextRouter, useRouter } from 'next/router';
import { useCurrentCountry } from 'src/hooks/current-country';


const LowerSection = ({
  url,
  isEven,
  data,
  vehicleId,
  setVehicleId,
}: IVehicleTabular) => {
  const countryIcon = getCountryIcon(data.cssClass);
  const [textLimit, setTextLimit] = useState(20);
  const { favoriteCars, toggleFavorite } = useFavoriteCars();
  const ref = useRef(null);
  const {
    query: { auction },
  }: NextRouter = useRouter();
  const setContext = useSetContext();
  const currentCountry = useCurrentCountry(data.countryId);

  const classes = `border border-[#EDEDED] ${
    isEven ? 'bg-[#FFFEEF]' : 'bg-[#E9FAFF]'
  }`;

  function handleResize() {
    const element = ref.current;
    if (element) {
      const averageCharWidth = 10;
      const textLimit = Math.floor(element.offsetWidth / averageCharWidth);
      setTextLimit(textLimit);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleFavoriteClick = () => {
    toggleFavorite(data?.carId);
    notify(
      'success',
      favoriteCars.find((x) => x === data.carId)
        ? 'Remove From Favourite'
        : 'Add to Favourite'
    );
  };

  const { data: biddingData } = useBiddingList(
    data?.lotNo,
    data?.auctionCompanyId,
    data?.auctionDate
  );
  

  return (
    <tr
      className={`relative cursor-pointer ${
        isEven ? 'bg-[#FFFEEF]' : 'bg-[#fff]'
      }`}
    >
      
      <td
        className={`${classes} bg-cover bg-center relative w-[200px] align-top`}
       
      >
        {data.isDelivery === 1 && currentCountry.isDelivered === 1 && (
          <Image
            alt=""
            className="top-0 left-0 absolute Z-50"
            src={'/assets/reserved.png'}
            width={90}
            height={100}
          ></Image>
        )}

        <Link href={url} onClick={() => setContext('')}>
          <Image
            src={data.imageUrl || '/assets/car-no-image.jpg'}
            alt=""
            loading="lazy"
            width={200}
            height={100}
            placeholder="blur"
            blurDataURL={listingLoaderImage}
          />
        </Link>
      </td>
      <td className="border border-[#EDEDED] p-2  text-left" colSpan={3}>
        <p style={{ color: '#3A2BF7' }}>
          <span className="text-[11px] text-green-600 font-semibold">
            {data?.fuelName ? data.fuelName + ', ' : ''}
            {data?.driveName ? data.driveName + ', ' : ''}
            {data?.doors ? data.doors + ' doors, ' : ''}
            {data?.seats ? data.seats + ' seats, ' : ''}
          </span>
        </p>
        <p className="text-primaryDark text-xs" ref={ref}>
          <span className="text-[11px] text-gray-600 font-normal">
            {data?.carAccessories ? data.carAccessories + ', ' : ''}
          </span>
        </p>
        <p
          className="text-primaryDark text-xs justify-between flex font-bold"
          ref={ref}
        >
          <span className="text-[11px] text-gray-600">
            <span className="text-red-700">Company:</span> {data?.company}
          </span>
          <span className="text-[11px] text-gray-600">
            <span className="text-red-700"> {data?.futureDaysPassed}</span>
          </span>
        </p>
        <p className="justify-between flex">
          <span className="font-semibold text-green-700 text-xs">
            {data?.purchaseDate}
          </span>
          <span className="font-semibold text-green-700 text-xs">
            SD: {data.shipmentDate}
          </span>
        </p>

        <p className="justify-between">
          <span className="text-[11px] text-gray-600 font-normal">
            BL No: {data?.blNo}
          </span>
        </p>

        <div className="flex">
          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px] pr-2">
              <span className="text-black">Lot No:</span> {data.lotNo}
            </span>
          </div>

          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px]">
              <span className="text-black">PurchasePrice:</span>{' '}
              {data.purchasePrice}
            </span>
          </div>

          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px] pr-2">
              <span className="text-black">BidderName: </span>
              {data.bidderName}
            </span>
          </div>
        </div>

        <div className="flex ">
          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px] pr-2">
              <span className="text-black"> Auction:</span> {data.Auction}
            </span>
          </div>

          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px]">
              <span className="text-black">CurrentMukechi:</span>{' '}
              {data.currentMukechi}
            </span>
          </div>

          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px] pr-2">
              <span className="text-black">BidPrice: </span> {data.bidPrice}
            </span>
          </div>
        </div>

        <div className="flex">
          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px] pr-2">
              <span className="text-black">BidMarket:</span> {data.bidMarket}
            </span>
          </div>

          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px]">
              <span className="text-black">PurDate:</span> {data.purDate}
            </span>
          </div>

          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px] pr-2">
              <span className="text-black"> Weight: </span> {data.Weight}
            </span>
          </div>
        </div>

        <div className="flex">
          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px] pr-2">
              <span className="text-black">M3: </span> {data.M3}
            </span>
          </div>

          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px]">
              <span className="text-black"> EngCode: </span> {data.engCode}
            </span>
          </div>

          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px]">
              <span className="text-black">BidMarket:</span> {data.bidMarket}
            </span>
          </div>
        </div>

        <div className="flex overflow-auto">
          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px]">
              <span className="text-black"> ExpiryDate:</span> {data.expiryDate}
            </span>
          </div>

          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px]">
              <span className="text-black"> EngCode: </span> {data.engCode}
            </span>
          </div>

          <div className="flex justify-start w-1/3">
            <span className="font-semibold text-red-600 sm:text-[10px] md:text-[11px] lg:text-[10px] 2xl:text-[10px] 3xl:text-[11px]">
              <span className="text-black"> ExportCertificateNo: </span>{' '}
              {data.exportCertificateNo}
            </span>
          </div>
        </div>

        <BiddingListModel
          data={data}
          biddingData={biddingData?.data}
          vehicleId={vehicleId}
        />

        <div className="flex items-center mt-2 gap-1">
          {data?.fuelName?.toLowerCase() === 'hybrid-gasoline' && (
            <span>
              <Image
                alt=""
                src={'/assets/hybrid-logo.png'}
                width={40}
                height={10}
              ></Image>
            </span>
          )}
          {data?.driveName?.toLowerCase() === '4wheel drive' && (
            <span>
              <Image
                alt=""
                src={'/assets/4WD.png'}
                width={35}
                height={12}
              ></Image>
            </span>
          )}
          {data?.fuelName?.toLowerCase() === 'diesel' && (
            <span>
              <Image
                alt=""
                src={'/assets/desel.png'}
                width={60}
                height={12}
              ></Image>
            </span>
          )}
        </div>
      </td>
      <td
        className="border border-[#EDEDED] p-2  text-xs text-center"
        colSpan={5}
      >
        <table className="w-full text-center">
          <tbody>
            <tr>
              <td className="place-content-center items-center">
                {countryIcon}
              </td>
              <td>
                <button
                  onClick={handleFavoriteClick}
                  className="flex place-content-center items-center gap-1"
                >
                  <FavIcon
                    color={
                      favoriteCars.find((x) => x === data.carId)
                        ? 'red'
                        : 'gray'
                    }
                  />
                  Favorites
                </button>
              </td>
              <td className="content-end place-content-center flex gap-2 items-center">
                <SteeringIcon />
                {data.transmissionName} {data.steeringName}
              </td>
            </tr>
          </tbody>
        </table>

        <VehicleActionButtons
          data={data}
          vehicleId={vehicleId}
          setVehicleId={setVehicleId}
        />
      </td>
    </tr>
  );
};

export default LowerSection;
