import React from 'react';
import Loading from 'components/loading';
import Error from 'components/error';
import BodyTypeItem from 'components/body-type/components/BodyTypeItem';
import { useBodyType } from 'react-query/hooks/api/body-type';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';

const WebBodyTypes = () => {
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);

  const { data, isLoading, isError, isSuccess } = useBodyType(params);

  return (
    <div className="max-w-full 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden mt-2">
      <summary className="text-sm leading-6 text-white font-semibold select-none p-3 bg-black md:text-xs">
        Body Types
      </summary>
      <div className="sm:block xs:block xxs:block text-sm leading-6 text-slate-600">
        <div className="group inline-block w-full">
          <ul className="bg-white group-hover:scale-100  hover:sm:duration-0 text-[#2b2a2a] transition duration-150 ease-in-out origin-top w-full show">
            {isLoading && <Loading />}
            {(!data || isError) && !isLoading && <Error />}
            {isSuccess &&
              data?.data?.map((item, i) => (
                <BodyTypeItem
                  key={i}
                  name={item.bodyTypeName}
                  id={item.bodyTypeId}
                  bodyTypeCount={item.bodyTypeCount}
                  image={item.cssClass.toLowerCase()}
                  isEven={i % 2 === 0 ? true : false}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebBodyTypes;
