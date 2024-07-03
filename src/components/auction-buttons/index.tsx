import React from 'react';
import { useAuction } from 'react-query/hooks/api/auction';
import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';
import { ROUTES } from 'src/common/routes';
import { useSelectedCountryIcon } from 'src/hooks/selected-country-icon';
import { useRouterParams } from 'src/hooks/router-params';
import { motion } from 'framer-motion';

const AuctionButtons = () => {
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);
  const countryIcon = useSelectedCountryIcon();

  const { data, isSuccess } = useAuction(params.countryId);

  return (
    <div className="grid w-full grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 grid-rows-1 grid-flow-dense gap-2 ">
      {isSuccess &&
        data?.data?.map((item) => (
          <Link
            key={item.auctionId}
            href={`${ROUTES.AUCTION}/${item.auctionShortName.toLowerCase()}-${
              item.auctionId
            }/${params.countryId}${
              params.pCountryId ? `/parent/${params.pCountryId}` : ''
            }/1`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${
                params.auctionId === item.auctionId
                  ? 'bg-gradient-to-r from-orange-300 to-primary hover:from-pink-500 hover:to-yellow-500'
                  : 'bg-gradient-to-r  from-emerald-500 from-10% via-black-500 via-30% to-red-500 to-90%'
              }  overflow-hidden content-center justify-left text-white text-left w-full md:my-2 sm:my-2 xs:my-2 xxs:my-2 rounded-r-full hover:bg-primary hover:text-black  relative button-aye button--aylen focus:ring-offset-2 focus:ring-2 hover:ring-offset-2 hover:ring-2`}
            >
              <div
                className={`${
                  params.auctionId === item.auctionId
                    ? 'bg-primary'
                    : 'bg-primaryDark'
                }bg-primaryDark my-1 items-center justify-left gap-x-3 px-3 flex text-black`}
              >
                <div>{countryIcon} </div>
                <div>
                  <div className="font-bold">{item.auctionShortName}</div>
                  <div>
                    {item.auctionDate}{' '}
                    <small className="font-bold">{`( ${item.carsCount}-Units)`}</small>{' '}
                    <div>
                      <small>Time: 08:30 AM</small>
                    </div>
                  </div>
                </div>
                {/* Time: 08:30:00 AM */}
              </div>
            </motion.div>
          </Link>
        ))}
    </div>
  );
};

export default AuctionButtons;
