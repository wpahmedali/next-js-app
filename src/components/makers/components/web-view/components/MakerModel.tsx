import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { IMakerModel } from 'components/makers/interfaces/maker-model.interface';
import { NextRouter, useRouter } from 'next/router';
import Loading from 'components/loading';
import { useRouterParams } from 'src/hooks/router-params';
import ModelItem from './ModelItem';
import { ROUTES } from 'src/common/routes';
import Link from 'next/link';
import { useModelState, useSetContext } from 'src/providers/ModelContext';

const WebMakerItem = ({
  loadingMakerId,
  makerIsLoading,
  isEven,
  makerName,
  makerId,
  makerCount,
  image,
  models,
  currentId,
  setCurrentId,
}: IMakerModel): JSX.Element => {
  const setContext = useSetContext();
  const useContext = useModelState();
  const router: NextRouter = useRouter();
  const { yard, country } = router.query;
  const params = useRouterParams(router.query);
  const [currentModelId, setCurrentModelId] = useState<number>(null);

  const handleClick = (hover) => {
    if (currentId === makerId) {
      setCurrentId(null);
      setContext('');
    } else {
      setCurrentId(makerId);
      setContext('makerModelDialog');
    }

    if (!hover) {
      setCurrentId('');
      setContext('');
    }
  };

  let baseUrl = yard ? ROUTES.USED_CARS_YARDS + '/' + yard : ROUTES.USED_CARS;
  baseUrl += country ? '/' + country : ROUTES.ALL_STOCK;

  return (
    <Fragment>
      <button
        onClick={handleClick}
        className={`${
          isEven ? 'bg-[#E8E8E8]' : 'bg-[#CECECE]'
        } group-hover:scale-100 w-full hover:text-white hover:sm:duration-0 text-black transition duration-150 ease-in-out origin-top justify-between hover:bg-black font-normal text-xs text-left px-3 py-2.5 inline-flex items-center uppercase`}
        type="button"
      >
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
        <span className="text-xs pl-1 flex-1 ">{makerName.toUpperCase()}</span>
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

      {makerId === currentId && useContext === 'makerModelDialog' && (
        <div
          className={`z-10 ${
            makerId === currentId ? 'hidden' : ''
          }hidden bg-black divide-y divide-gray-100 rounded-lg shadow !static !transform-none uppercase`}
        >
          <ul
            className="py-2 text-sm text-white w-full"
            aria-labelledby="multiLevelDropdownButton"
          >
            <li>
              <Link
                href={`${baseUrl}/${makerName.toLowerCase()}-${makerId}/all-models/all-chassis/1${
                  params.isReserved ? `?is_reserved=true` : ''
                }`}
                onClick={() => setCurrentId(null)}
                className="flex px-4 py-2 hover:bg-white hover:text-black border-b border-gray-600 justify-between"
              >
                <span>All {makerName} Models</span> <span>{makerCount}</span>
              </Link>
            </li>
            <div>
              {models.map((item, i) => (
                <ModelItem
                  key={i}
                  item={item}
                  makerId={makerId}
                  makerName={makerName}
                  modelIsLoading={makerIsLoading}
                  isEven={i % 2 === 0 ? true : false}
                  currentModelId={currentModelId}
                  setCurrentModelId={setCurrentModelId}
                  setCurrentId={setCurrentId}
                />
              ))}
            </div>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default WebMakerItem;
