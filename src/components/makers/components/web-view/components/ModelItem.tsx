import { IModelItem } from 'components/makers/interfaces/model-item.interface';
import React from 'react';
import ChassisItem from './ChassisItem';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import { ROUTES } from 'src/common/routes';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ModelItem = ({
  item,
  makerId,
  makerName,
  currentModelId,
  setCurrentModelId,
  setCurrentId,
}: IModelItem): JSX.Element => {
  const router: NextRouter = useRouter();
  const { yard, country } = router.query;
  const params = useRouterParams(router.query);

  const handleClick = (hover: boolean) => {
    if (!hover) {
      setCurrentModelId(null);
    } else {
      setCurrentModelId(item.modelId);
    }
  };

  const handleChassisClick = () => {
    setCurrentId(null);
    setCurrentModelId(null);
  };

  let baseUrl = yard ? ROUTES.USED_CARS_YARDS + '/' + yard : ROUTES.USED_CARS;
  baseUrl += country ? '/' + country : ROUTES.ALL_STOCK;

  return (
    <motion.div
      onMouseEnter={() => handleClick(true)}
      onMouseLeave={() => handleClick(false)}
    >
      <li className="relative">
        <button
          id="doubleDropdownButton"
          data-dropdown-toggle="doubleDropdown"
          data-dropdown-placement="right-start"
          type="button"
          className={`${
            currentModelId === item.modelId ? 'bg-white text-black' : ''
          } flex items-center justify-between w-full border-b border-gray-600 px-4 py-2 hover:bg-white hover:text-black uppercase`}
        >
          <span>{item.modelName.toUpperCase()}</span>
          <span className="ml-auto">{item.modelCount}</span>
          <svg
            className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>

        <div
          id="doubleDropdown"
          className={`z-10 ${
            item.modelId !== currentModelId ? 'hidden' : ''
          } bg-black hover:text-white divide-y divide-gray-100 rounded-lg shadow w-80 max-h-[800px] overflow-y-auto`}
        >
          <ul
            className="py-2 text-sm text-white"
            aria-labelledby="doubleDropdownButton"
          >
            <li>
              <Link
                href={`${baseUrl}/${makerName.toLowerCase()}-${makerId}/${item.modelName.toLowerCase()}-${
                  item.modelId
                }/all-chassis/1${params.isReserved ? `?is_reserved=true` : ''}`}
                onClick={handleChassisClick}
                className="px-4 py-2 hover:bg-white hover:text-black border-b border-gray-200 justify-between flex"
              >
                <span>All {item.modelName.toUpperCase()} Chassis</span>
                <span className="ml-auto">{item.modelCount}</span>
              </Link>
            </li>
            {item?.chassisCodes.map((chassis, i) => (
              <ChassisItem
                key={i}
                url={`${baseUrl}/${makerName.toLowerCase()}-${makerId}/${item.modelName.toLowerCase()}-${
                  item.modelId
                }/${chassis.chassisCodeName.toLowerCase()}-${
                  chassis.chassisCodeId
                }/1${params.isReserved ? `?is_reserved=true` : ''}`}
                item={chassis}
                handleChassisClick={handleChassisClick}
              />
            ))}
          </ul>
        </div>
      </li>
    </motion.div>
  );
};

export default ModelItem;
