import React, { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FavIcon, WhatsappIcon } from 'icons';
import Link from 'next/link';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';
import { getCountryIcon } from 'utils/get-country-icon';
import EngineSpec from './components/EngineSpec';
import BodySpec from './components/BodySpec';
import Image from 'next/image';
import { listingLoaderImage } from 'src/common/listing-loader-image';
import { useFavoriteCars } from 'src/providers/FavouriteVehicleList';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from 'utils/toast';
import { useCurrentCountry } from 'src/hooks/current-country';
import { useWhatsappRedirect } from 'src/hooks/whatsapp-redirect';
import ReactGA from 'react-ga';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

interface IVehicleCard {
  special?: boolean;
  data: IVehicleDetail;
  url: string;
}

const VehicleCard = ({ special, url, data }: IVehicleCard) => {
  const countryIcon = getCountryIcon(data.cssClass);
  const { favoriteCars, toggleFavorite } = useFavoriteCars();
  const [isfavorite, setIsFavorite] = useState(false);
  const currentCountry = useCurrentCountry(data.countryId);

  useEffect(() => {
    setIsFavorite(true);
  }, []);

  const handleFavoriteClick = () => {
    toggleFavorite(data);
    notify(
      favoriteCars.find((x) => x.carId === data.carId)
        ? 'Remove From Favourite'
        : 'Add to Favourite'
    );
  };

  const whatsappRedirectLink = useWhatsappRedirect('', data);

  const handleClick = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: 'My Button',
    });
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      // whileTap={{ scale: 0.6 }}
      className="w-full max-w-screen-lg bg-white border border-gray-200 rounded-lg shadow mt-3 hover:z-40 relative overflow-hidden"
    >
      <div className="3xl:h-52 2xl:h-48 lg:h-56 md:h-44 sm:h-72 xs:h-72 xxs:h-56 overflow-hidden bg-contain relative">
        <Link href={url}>
          <Image
            className="w-full rounded-t-lg"
            src={
              data.imageUrl.replace('/s_thumb', '/thumb') ||
              '/assets/car-no-image.jpg'
            }
            width={500}
            height={500}
            loading="lazy"
            alt=""
            placeholder="blur"
            blurDataURL={listingLoaderImage}
          />
        </Link>
        {data?.webBannerCaption && (
          <div className="bg-red-600 absolute bottom-0 left-0 p-1 text-white px-6 animate-pulse w-4/5">
            {data?.webBannerCaption}
          </div>
        )}

        {!data?.auctionDate && data?.portArrivalDate && special && (
          <Fragment>
            <div className="bg-red-600 absolute top-0 left-0 p-1 text-white px-6 animate-pulse w-4/5">
              Port Arrival Date
            </div>
            <span className="bg-red-600 text-white absolute p-1 w-full text-center rotate-45 3xl:top-6 3xl:-right-28 2xl:top-7 2xl:-right-20 xl:top-8 xl:-right-24 lg:top-9 lg:-right-28 md:top-8 md:-right-20 sm:top-8 sm:-right-36 xs:top-8 xs:-right-32 xxs:top-8 xxs:-right-24 text-sm font-bold animate-pulse">
              {data.portArrivalDate}
            </span>
          </Fragment>
        )}
        {data?.auctionDate && special && (
          <Fragment>
            <div className="bg-red-600 absolute top-0 left-0 p-1 text-white px-6 animate-pulse w-4/5">
              Auction Date
            </div>
            <span className="bg-red-600 text-white w-full absolute p-1 text-center rotate-45 3xl:top-6 3xl:-right-28 2xl:top-7 2xl:-right-20 xl:top-8 xl:-right-24 lg:top-9 lg:-right-28 md:top-8 md:-right-20 sm:top-8 sm:-right-36 xs:top-8 xs:-right-32 xxs:top-8 xxs:-right-24 text-sm font-bold animate-pulse">
              {data.auctionDate}
            </span>
          </Fragment>
        )}

        {data.isDelivery === 1 && currentCountry.isDelivered === 1 && (
          <Image
            alt=""
            className="absolute top-0 left-0"
            src={'/assets/reserved.png'}
            width={90}
            height={100}
          ></Image>
        )}

        {data.discountedPrice > 0 && (
          <Image
            alt=""
            className="absolute top-0 right-0"
            src={'/assets/special.png'}
            width={63}
            height={63}
          />
        )}
      </div>

      <div className="px-2 pb-2">
        <BodySpec
          data={data}
          url={url}
          isPriceDisplay={currentCountry.isPriceDisplay}
        />

        <div className="flex items-center justify-between border-b border-zinc-300 bg-[#dfdfdf] p-1">
          <div className="flex items-center justify-between">
            <Link
              href={whatsappRedirectLink}
              target="_blank"
              className="mr-1"
              onClick={handleClick}
            >
              <WhatsappIcon />
              <span className="text-[10px] font-medium text-black leading-4 py-2"></span>{' '}
            </Link>
          </div>

          <div className="flex items-center justify-center">
            {countryIcon}
            <a />
            <span className="text-[10px] font-medium text-black leading-4 py-2 ml-1">
              {data.countryName}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-zinc-300 bg-[#dfdfdf] p-1">
          <button
            onClick={handleFavoriteClick}
            className="flex items-center justify-between"
          >
            <FavIcon
              color={
                isfavorite &&
                favoriteCars.filter((x) => x.carId === data.carId).length > 0
                  ? 'red'
                  : 'gray'
              }
            />
            <span className="text-[10px] font-medium text-black leading-4 py-2 ml-1">
              Favorites
            </span>
          </button>
          <div className="flex gap-1 items-center">
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
        </div>

        <EngineSpec
          engineSize={data.engineSize}
          registrationYear={data.registrationYear}
          registrationMonth={data.registrationMonth}
          mileage={data.mileage}
          steeringName={data.steeringName}
          transmissionName={data.transmissionName}
        />
      </div>
    </motion.div>
  );
};

export default VehicleCard;
