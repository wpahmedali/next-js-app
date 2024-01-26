import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MakerModelItem from 'components/makers/components/web-view/components/MakerModelItem';
import { IMakerModel } from 'components/makers/interfaces/maker-model.interface';
import { ROUTES } from 'src/common/routes';
import { NextRouter, useRouter } from 'next/router';
import Loading from 'components/loading';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { useRouterParams } from 'src/hooks/router-params';

const WebMakerModel = ({
  loadingMakerId,
  makerIsLoading,
  isEven,
  makerName,
  makerId,
  makerCount,
  image,
  models,
}: IMakerModel): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  const router: NextRouter = useRouter();
  const selectedCountry = useCurrentCountryName();
  const params = useRouterParams(router.query);
  const { auction, country } = router.query;

  const baseUrl = country
    ? auction
      ? `${ROUTES.AUCTIONS}/${auction}/${country}`
      : `${ROUTES.USED_CARS}/${country}`
    : `${ROUTES.USED_CARS}${
        params.countryId
          ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
          : ROUTES.ALL_STOCK
      }`;

  return (
    <motion.div
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <li
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

        {isHovered && (
          <ul className="h-96 sm:h-auto xs:h-auto xxs:h-auto py-2 overflow-y-auto text-xs w-48 backdrop-blur-lg bg-black/50 bg-primaryDark text-white dark:text-gray-20 border border-black rounded-sm absolute md:w-full sm:w-full xs:w-full xxs:w-full top-0 right-0 z-50">
            <MakerModelItem
              url={`${baseUrl}/${makerName.toLowerCase()}-${makerId}/all-models/1`}
              model="All Models"
              modelCount={makerCount}
              isActive={true}
              setIsHovered={setIsHovered}
            />
            {models.map((item) => (
              <MakerModelItem
                url={`${baseUrl}/${makerName.toLowerCase()}-${makerId}/${item.modelName.toLowerCase()}-${
                  item.modelId
                }/1`}
                model={item.modelName}
                modelCount={item.modelCount}
                key={item.modelName}
                setIsHovered={setIsHovered}
              />
            ))}
          </ul>
        )}
      </li>
    </motion.div>
  );
};

export default WebMakerModel;
