import React from 'react';
import { useAuction } from 'react-query/hooks/api/auction';
import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';
import { ROUTES } from 'src/common/routes';
import { useSelectedCountryIcon } from 'src/hooks/selected-country-icon';
import { useRouterParams } from 'src/hooks/router-params';

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
            }/${params.countryId}/1`}
          >
            <div
              className={`${
                params.auctionId === item.auctionId ? 'bg-primary' : 'bg-black'
              }  overflow-hidden content-center text-primary justify-left text-left w-full md:my-2 sm:my-2 xs:my-2 xxs:my-2`}
            >
              <div
                className={`${
                  params.auctionId === item.auctionId
                    ? 'bg-primary'
                    : 'bg-primaryDark'
                }bg-primaryDark text-white my-3 font-bold items-center justify-left gap-x-3 px-4 flex`}
              >
                <div>{countryIcon} </div>
                <div>
                  <div>{item.auctionShortName}</div>
                  <div>
                    {item.auctionDate}{' '}
                    <small>{`( ${item.carsCount}-Units)`}</small>{' '}
                  </div>
                </div>
                {/* Time: 08:30:00 AM */}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default AuctionButtons;
