import React, { Fragment, useEffect, useRef } from 'react';
import VehicleBodySpec from './components/VehicleBodySpec';
import VehicleEnginSpec from './components/VehicleEnginSpec';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';
import Loading from 'components/loading';
import { ROUTES } from 'src/common/routes';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import Typewriter from 'typewriter-effect';
import { useModelState, useSetContext } from 'src/providers/ModelContext';
import { TruckIcon } from 'icons/react-icons/Truck';

const FeatureCars = ({
  data,
  isFetching,
  isPreviousData,
  setPage,
}: {
  data: IVehicleDetail[];
  isFetching: boolean;
  isPreviousData: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedCountry = useCurrentCountryName();
  const router: NextRouter = useRouter();

  const { isFeature } = useModelState();
  const setContext = useSetContext();

  const toggleFeature = () => {
    setContext('SET_FEATURE', !isFeature);
  };

  const {
    query: { country, auction, maker, model, bodyType },
  } = router;

  const params = useRouterParams(router.query);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (
        container.scrollTop + container.clientHeight >=
          container.scrollHeight &&
        !isFetching &&
        !isPreviousData
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [isFetching, isPreviousData, setPage]);

  const baseUrl = country
    ? auction
      ? `${ROUTES.AUCTIONS}/${auction}/${country}`
      : `${ROUTES.USED_CAR}/${country}`
    : `${ROUTES.USED_CAR}${
        params.countryId
          ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
          : ROUTES.ALL_STOCK
      }`;

  return (
    <Fragment>
      <div className="text-lg leading-6 text-white font-bold select-none p-3 bg-primaryDark">
        <span>Featured Cars</span>
      </div>
      <div onClick={toggleFeature} className="lg:hidden sm:block my-2">
        <span className="text-xl text-black bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg me-2 mb-2 shadow-md shadow-yellow-100/50 leading-4 px-2 w-full uppercase text-center flex items-center py-3 cursor-pointer gap-3">
          <span className="bg-black rounded-md p-2 text-white">
            <TruckIcon />
          </span>
          <Typewriter
            options={{
              strings: ['Featured Cars'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      <div
        ref={containerRef}
        className={`shadow-md overflow-y-auto h-[1200px] ${
          !isFeature ? 'sm:hidden lg:block' : ''
        }`}
      >
        {data?.map((item, i) => (
          <div
            key={i}
            className="border p-2 py-1 bg-gradient-to-r from-slate-100 to-orange-50 hover:from-orange-50 hover:to-slate-100 cursor-pointer"
          >
            <VehicleBodySpec
              url={`${baseUrl}/${
                maker ? maker : item.makerName.toLowerCase()
              }/${model ? model : item.modelName.toLowerCase()}${
                auction ? `/car-detail` : ''
              }/${item.carId}${bodyType ? `?bodyType=${bodyType}` : ''}`}
              data={item}
            />
            <VehicleEnginSpec data={item} />
          </div>
        ))}
        {isPreviousData && isFetching && <Loading />}
      </div>
    </Fragment>
  );
};

export default FeatureCars;
