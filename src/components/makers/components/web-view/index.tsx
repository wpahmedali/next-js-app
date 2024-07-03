import React, { useState } from 'react';
import { useMakerModel } from 'react-query/hooks/api/marker-model';
import Loading from 'components/loading';
import Error from 'components/error';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import WebMakerItem from 'components/makers/components/web-view/components/MakerModel';

const WebMakers = ({ isLoading: makerIsLoading, makerId }): JSX.Element => {
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);
  const [currentId, setCurrentId] = useState<number>(null);

  const { data, isLoading, isError, isSuccess } = useMakerModel(params);

  return (
    <div className="max-w-full 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
      <summary className="text-sm leading-6 text-white font-semibold select-none p-3 bg-black md:text-xs">
        All Maker List
      </summary>

      <div className="group inline-block w-full">
        {isLoading && <Loading />}
        {(!data || isError) && !isLoading && <Error />}
        {isSuccess &&
          data?.data?.map((item, i) => (
            <WebMakerItem
              key={i}
              loadingMakerId={makerId}
              makerIsLoading={makerIsLoading}
              models={item.models}
              makerName={item.makerName}
              makerId={item.makerId}
              makerCount={item.makerCount}
              image={item.cssClass.toLowerCase()}
              isEven={i % 2 === 0 ? true : false}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          ))}
      </div>
    </div>
  );
};

export default WebMakers;
