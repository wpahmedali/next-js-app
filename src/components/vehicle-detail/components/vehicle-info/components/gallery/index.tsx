import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import GalleryModel from './gallery-model';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';
import { useCurrentCountry } from 'src/hooks/current-country';

const Gallery = ({ data }: { data: IVehicleDetail }): JSX.Element => {
  const [activeimage, setActiveImage] = useState<string>();
  const [activeImageIndex, setActiveImageIndex] = useState<number>();
  const [isOpenImage, setIsOpenImage] = useState<boolean>(false);
  const currentCountry = useCurrentCountry(data.countryId);
  const SelectedCountry = useCurrentCountry();

  useEffect(() => {
    setActiveImage(
      data?.carImages?.length > 0
        ? data?.carImages?.[0].imagePath.replace('/s_thumb', '/thumb')
        : ''
    );
  }, [data.carImages]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.3 }}
      >
        <div className="grid gap-2 relative">
          {data.isDelivery === 1 && currentCountry.isDelivered === 1 && (
            <Image
              alt=""
              className="top-0 left-0 absolute z-50"
              src={'/assets/reserved.png'}
              width={90}
              height={100}
            ></Image>
          )}

          {data?.discountedPrice > 0 && (
            <Image
              alt=""
              className="top-0 right-0"
              src={'/assets/special.png'}
              width={63}
              height={63}
            />
          )}

          <div
            onClick={() => {
              setIsOpenImage(true);
              setActiveImageIndex(0);
            }}
            className="inline-block bg-cover 3xl:h-[463px] 2xl:h-[382px] xl:h-[325px] lg:h-[252px] md:h-[342px] sm:h-[342px] overflow-hidden z-10"
          >
            <Image
              className="max-w-full cursor-pointer focus:ring focus:ring-violet-300"
              src={activeimage}
              width={1920}
              height={452}
              loading="lazy"
              alt=""
            />
          </div>

          <div className="grid grid-cols-3 gap-2 bg-cover">
            {data?.carImages?.map((item, index) => {
              const isAuctionSheetDisplay =
                SelectedCountry?.isAuctionSheetDisplay === 1;

              if (!isAuctionSheetDisplay && item.isAuctionSheet === 1) {
                return null;
              }

              return (
                <Image
                  onMouseOver={() =>
                    setActiveImage(item.imagePath.replace('/s_thumb', '/thumb'))
                  }
                  onClick={() => {
                    setIsOpenImage(true);
                    setActiveImageIndex(index);
                  }}
                  className={`relative object-cover max-w-full rounded-lg 3xl:h-[135px] 2xl:h-[110px] lg:h-[104px] md:h-[135px] sm:h-[93px] xs:h-[93px] xxs:h-[93px] overflow-hidden ${
                    item.imagePath.replace('/s_thumb', '/thumb') ===
                      activeimage && 'opacity-70'
                  } hover:opacity-70 cursor-pointer focus:ring focus:ring-violet-300`}
                  src={item.imagePath}
                  width={633}
                  height={322}
                  alt=""
                  key={index}
                  loading="lazy"
                />
              );
            })}
            <GalleryModel
              data={data}
              isOpenImage={isOpenImage}
              setIsOpenImage={setIsOpenImage}
              activeImageIndex={activeImageIndex}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Gallery;
