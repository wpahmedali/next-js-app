import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import { useSetContext } from 'src/providers/ModelContext';
import { IYardItem } from 'src/interfaces/yard-list.interface';

const JardItem = ({
  data,
  reserved,
}: {
  data: IYardItem;
  reserved: boolean;
}): JSX.Element => {
  const router = useRouter();
  const params = useRouterParams(router.query);
  const setContext = useSetContext();

  const url = `/stock/yard-location/${
    params?.countryId ? params.countryId : 'all_stock'
  }/${data?.name + '-' + data?.id}/1${reserved ? '?is_reserved=true' : ''}`;

  const handleClick = () => {
    router.push(url);
    setContext('');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={
        reserved
          ? `cursor-pointer ring-offset-2 ring-1 ${
              params?.yardId === data?.id && params.isReserved
                ? 'bg-gray-500 text-white'
                : 'bg-gray-200'
            } to-90% overflow-hidden content-center justify-left text-left w-full 3xl:my-3 md:my-2 sm:my-2 xs:my-2 xxs:my-2 rounded hover:bg-red-500 relative  focus:ring-offset-2 focus:ring-2 hover:ring-offset-2 hover:ring-2`
          : `cursor-pointer ${
              params?.yardId === data?.id && !params.isReserved
                ? 'bg-gray-500'
                : 'bg-gray-200'
            } to-80% overflow-hidden content-center justify-left text-left w-full md:my-2 sm:my-2 xs:my-2 xxs:my-2 rounded hover:bg-primary relative focus:ring-offset-2 focus:ring-2 hover:ring-offset-2 hover:ring-2`
      }
      onClick={handleClick}
    >
      {reserved && (
        <div className="absolute top-0 right-0 rotate-90">
          <Image
            className="w-full"
            src="/assets/Reservedtag.png"
            width={50}
            height={50}
            alt="Reserved"
          />
        </div>
      )}
      <div
        className={`my-1 items-center justify-left gap-x-3 px-3 flex`}
      >
        <div>
          <div className="font-bold">{data?.name}</div>
          <div>
            <small className="font-bold">{data?.totalCar} units </small>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JardItem;
