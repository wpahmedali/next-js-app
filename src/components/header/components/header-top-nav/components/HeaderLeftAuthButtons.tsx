import Link from 'next/link';
import { FavouriteIcon } from 'icons';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useFavoriteCars } from 'src/providers/FavouriteVehicleList';

const HeaderLeftAuthButtons = () => {
  const [time, setTime] = useState('');
  const [data, setData] = useState<number>();
  const { favoriteCars } = useFavoriteCars();

  useEffect(() => {
    setData(favoriteCars.length);
  }, [favoriteCars]);

  useEffect(() => {
    const updateJapanTime = () => {
      const japanTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Tokyo',
      });
      setTime(japanTime);
    };

    updateJapanTime();
    const intervalId = setInterval(updateJapanTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-between 2xl:ml-0 lg:ml-0 md:ml-0 sm:ml-24 xs:ml-48 xxs:ml-36 2xl:pl-60 lg:pl-60 md:pl-20 text-white">
      <nav className="flex font-normal text-xs gap-4">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden"
        >
          <Link
            href="/home/compare_cars/1"
            className="flex items-center hover:text-primary"
          >
            <FavouriteIcon />
            <span className="items-start justify-start ms-1 pb-0 -ml-4">
              Favourites ({data})
            </span>
          </Link>
        </motion.div>
        <div className="text-primary font-medium 3xl:block 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
          Japan Time: {time}
        </div>
      </nav>
    </div>
  );
};
export default HeaderLeftAuthButtons;
