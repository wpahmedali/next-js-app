import React from 'react';
import { CaretLeftIcon, CaretRightIcon, HomeIcon } from 'icons';
import { NextRouter, useRouter } from 'next/router';
import { ROUTES } from 'src/common/routes';
import Link from 'next/link';
import { GetBacklistingUrl } from 'src/hooks/get-back-listing-url';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { useRouterParams } from 'src/hooks/router-params';
import { useNextPreviousCarList } from 'react-query/hooks/api/next-previous-car';

const Buttons = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const selectedCountry = useCurrentCountryName();
  const params = useRouterParams(router.query);
  const { country, maker, model, bodyType, auction } = router.query;

  const { data: nextData } = useNextPreviousCarList(params);

  const currentIndex =
    nextData?.data?.findIndex((x) => x.carId === Number(params.carId)) !== -1
      ? nextData?.data?.findIndex((x) => x.carId === Number(params.carId))
      : null;

  const baseUrl = country
    ? auction
      ? `${ROUTES.AUCTIONS}/${auction}/${params.countryId}`
      : `${ROUTES.USED_CAR}/${country}`
    : `${ROUTES.USED_CAR}${
        params.countryId
          ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
          : ROUTES.ALL_STOCK
      }`;

  const handleNextClick = () => {
    if (
      nextData?.data?.length > 0 &&
      currentIndex < nextData?.data?.length - 1
    ) {
      const vehicle = nextData?.data?.[currentIndex + 1];
      router.push(
        `${baseUrl}/${maker}/${model}${auction ? `/car-detail` : ''}/${
          vehicle.carId
        }${bodyType ? `?bodyType=${bodyType}` : ''}`
      );
    }
  };

  const handlePreviousClick = () => {
    if (nextData?.data?.length > 0 && currentIndex > 0) {
      const vehicle = nextData?.data?.[currentIndex - 1];
      router.push(
        `${baseUrl}/${maker}/${model}${auction ? `/car-detail` : ''}/${
          vehicle.carId
        }${bodyType ? `?bodyType=${bodyType}` : ''}`
      );
    }
  };

  const backBaseUrl = GetBacklistingUrl(router);

  return (
    <div className="flex justify-between my-2">
      <div className="home-btn">
        <Link
          href={backBaseUrl}
          className="rounded-r-lg rounded-l-lg bg-primary text-black px-3 py-2 flex gap-2 items-center hover:bg-gray-800 hover:text-white"
        >
          <HomeIcon />
          Back
        </Link>
      </div>
      <div className="next-pre-btn flex gap-2 items-center">
        <button
          className={`rounded-r-lg rounded-l-lg bg-primary text-black px-3 py-2 flex gap-2 items-center ${
            currentIndex === null ||
            nextData?.data?.length === 0 ||
            currentIndex === 0
              ? 'cursor-not-allowed'
              : 'hover:bg-gray-800 hover:text-white'
          }`}
          onClick={handlePreviousClick}
          disabled={
            currentIndex === null ||
            nextData?.data?.length === 0 ||
            currentIndex === 0
          }
        >
          <CaretLeftIcon />
          Previous
        </button>
        <button
          className={`rounded-r-lg rounded-l-lg bg-primary text-black px-3 py-2 flex gap-2 items-center ${
            currentIndex === null || currentIndex === nextData?.data?.length - 1
              ? 'cursor-not-allowed'
              : 'hover:bg-gray-800 hover:text-white'
          }`}
          onClick={handleNextClick}
          disabled={
            currentIndex === null || currentIndex === nextData?.data?.length - 1
          }
        >
          Next
          <CaretRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
