import React from 'react';
import { useMakerModel } from 'react-query/hooks/api/marker-model';
import Loading from 'components/loading';
import Error from 'components/error';
import { NextRouter, useRouter } from 'next/router';
import WebMakerModel from 'components/makers/components/web-view/components/MakerModel';
import { useRouterParams } from 'src/hooks/router-params';

const WebMakers = ({ isLoading: makerIsLoading, makerId }): JSX.Element => {
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);

  const { data, isLoading, isError, isSuccess } = useMakerModel(
    params.countryId,
    params.auctionId
  );

  return (
    <div className="max-w-full 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
      <summary className="text-sm leading-6 text-white font-semibold select-none p-3 bg-black md:text-xs">
        All Maker List
      </summary>

      <div className="group inline-block w-full">
        <ul className="bg-white group-hover:scale-100 hover:sm:duration-0 text-[#2b2a2a] transition duration-150 ease-in-out origin-top w-full show">
          {isLoading && <Loading />}
          {(!data || isError) && !isLoading && <Error />}
          {isSuccess &&
            data?.data?.map((item, i) => (
              <WebMakerModel
                loadingMakerId={makerId}
                makerIsLoading={makerIsLoading}
                key={i}
                models={item.models}
                makerName={item.makerName}
                makerId={item.makerId}
                makerCount={item.makerCount}
                image={item.cssClass.toLowerCase()}
                isEven={i % 2 === 0 ? true : false}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default WebMakers;
