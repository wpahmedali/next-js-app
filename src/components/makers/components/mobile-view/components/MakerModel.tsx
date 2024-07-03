import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IMakerModel } from 'components/makers/interfaces/maker-model.interface';
import { ROUTES } from 'src/common/routes';
import { NextRouter, useRouter } from 'next/router';
import Loading from 'components/loading';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { useRouterParams } from 'src/hooks/router-params';
import ModelDialog from './ModelDialog';

const MobileMakerModel = ({
  loadingMakerId,
  makerIsLoading,
  isEven,
  makerName,
  makerId,
  makerCount,
  image,
  models,
}: IMakerModel): JSX.Element => {
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);
  const router: NextRouter = useRouter();
  const selectedCountry = useCurrentCountryName();
  const params = useRouterParams(router.query);
  const { auction, country } = router.query;

  const baseUrl = country
    ? auction
      ? `${ROUTES.AUCTIONS}/${auction}/${country}${
          params.pCountryId ? `/parent/${params.pCountryId}` : ''
        }`
      : `${ROUTES.USED_CARS}/${country}`
    : `${ROUTES.USED_CARS}${
        params.countryId
          ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
          : ROUTES.ALL_STOCK
      }`;

  const showDialog = () => setIsShowDialog(true);
  const hideDialog = () => setIsShowDialog(false);
  return (
    // <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <motion.div>
      <li
        onClick={showDialog}
        className={`${
          isEven ? 'bg-[#E8E8E8]' : 'bg-[#CECECE]'
        } rounded-sm relative px-3 w-full py-2 hover:bg-black hover:text-white`}
      >
        <button className="w-full text-left flex items-center outline-none focus:outline-none">
          {makerIsLoading && loadingMakerId === makerId ? (
            <Loading height="h-5" width="w-5" />
          ) : (
            <Image
              className="flex-none w-8 h-full"
              src={`/assets/makers/${image}.png`}
              alt={image}
              width={50}
              height={50}
            />
          )}
          <span className="text-xs pl-1 flex-1 ">
            {makerName.toUpperCase()}
          </span>
          <span className="mr-auto">
            <svg
              className="fill-current h-4 w-4 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
      </li>
      <ModelDialog
        baseUrl={baseUrl}
        makerName={makerName}
        makerId={makerId}
        makerCount={makerCount}
        models={models}
        isShowDialog={isShowDialog}
        hideDialog={hideDialog}
      />
    </motion.div>
  );
};

export default MobileMakerModel;
