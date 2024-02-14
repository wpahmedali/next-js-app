import { getCountryIcon } from 'utils/get-country-icon';
import { FavIcon, SteeringIcon, WhatsappIcon } from 'icons';
import React, { useEffect, useRef, useState } from 'react';
import { useFavoriteCars } from 'src/providers/FavouriteVehicleList';
import { notify } from 'utils/toast';
import Image from 'next/image';
import { IVehicleTabular } from '../interfaces/VehicleItem.interface';
import { useWhatsappRedirect } from 'src/hooks/whatsapp-redirect';
import Link from 'next/link';

const LowerSection = ({ isEven, data }: IVehicleTabular) => {
  const countryIcon = getCountryIcon(data.cssClass);
  const [textLimit, setTextLimit] = useState(20);
  const { favoriteCars, toggleFavorite } = useFavoriteCars();
  const ref = useRef(null);

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
    toggleFavorite(data);
    notify(
      favoriteCars.find((x) => x.carId === data.carId)
        ? 'Remove From Favourite'
        : 'Add to Favourite'
    );
  };

  const whatsappRedirectLink = useWhatsappRedirect('', data);

  return (
    <tr className={`cursor-pointer ${isEven ? 'bg-[#FFFEEF]' : 'bg-[#fff]'}`}>
      <td className="border border-[#EDEDED] p-2  text-left" colSpan={3}>
        <p style={{ color: '#3A2BF7' }}>
          {data.fuelName && data.fuelName + `, `}
          {data.driveName && data.driveName + `, `}
          {data.doors && data.doors + ` doors, `}
          {data.seats && data.seats + ` seats`}
        </p>
        <p className="text-primaryDark text-xs" ref={ref}>
          {data.carAccessories?.length > textLimit
            ? data.carAccessories.slice(0, textLimit) + '...'
            : data.carAccessories}
        </p>
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
        colSpan={4}
      >
        <table className="w-full text-center">
          <tbody>
            <tr>
              <td className="place-content-center items-center">
                {whatsappRedirectLink && (
                  <Link href={whatsappRedirectLink} target="_blank">
                    <WhatsappIcon />
                  </Link>
                )}
              </td>
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
                      favoriteCars.find((x) => x.carId === data.carId)
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
      </td>
    </tr>
  );
};

export default LowerSection;
