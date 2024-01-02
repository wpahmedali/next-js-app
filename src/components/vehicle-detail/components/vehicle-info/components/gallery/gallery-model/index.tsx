import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import ModelHeader from './components/ModelHeader';
import Buttons from './components/Buttons';

const GalleryModel = ({
  data,
  isOpenImage,
  setIsOpenImage,
  activeImageIndex,
}): JSX.Element => {
  const [activeImage, setActiveImage] = useState(
    data?.carImages[activeImageIndex]?.imagePath.replace('/s_thumb', '/thumb')
  );

  useEffect(() => {
    setActiveImage(
      data?.carImages[activeImageIndex]?.imagePath.replace('/s_thumb', '/thumb')
    );
  }, [data?.carImages[activeImageIndex]?.imagePath]);

  return (
    <AnimatePresence>
      {isOpenImage ? (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed inset-0 flex items-center z-50 bg-black/60"
        >
          <div className="relative p-4 w-full max-w-7xl max-h-full m-auto ">
            <div className="relative bg-white rounded-lg shadow p-4">
              <ModelHeader
                setIsOpenImage={setIsOpenImage}
                makerName={data.makerName}
                modelName={data.modelName}
                registrationYear={data.registrationYear}
              />
              <div
                id="indicators-carousel"
                className="relative w-full"
                data-carousel="static"
              >
                <div className="relative overflow-hidden">
                  <div className="show duration-700 ease-in-out 3xl:[h-614px] 2xl:h-[614px] lg:h-[514px] md:h-[414px] sm:h-[auto] xs:h-[auto] xxs:h-[auto]">
                    <Image
                      className="max-w-full cursor-pointer focus:ring focus:ring-violet-300"
                      src={activeImage}
                      width={1920}
                      height={452}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>

                <Buttons
                  images={data?.carImages}
                  activeImage={activeImage}
                  setActiveImage={setActiveImage}
                />
              </div>

              <div className="grid grid-cols-1 2xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-4 xxs:grid-cols-4 gap-2 pt-2">
                {data?.carImages.map((item, index) => (
                  <div key={index} className="bg-white 2xl:h-[147px] lg:h-[147px] md:h-[147px] sm:h-[auto] overflow-hidden">
                    <Image
                      onMouseOver={() =>
                        setActiveImage(
                          item.imagePath.replace('/s_thumb', '/thumb')
                        )
                      }
                      className={`${
                        item.imagePath.replace('/s_thumb', '/thumb') ===
                          activeImage && 'opacity-70'
                      } hover:opacity-70 cursor-pointer focus:ring focus:ring-violet-300 rounded-lg w-full`}
                      src={item.imagePath}
                      width={633}
                      height={322}
                      alt=""
                      key={item.id}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};
export default GalleryModel;
