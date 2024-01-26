import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { listingLoaderImage } from 'src/common/listing-loader-image';

const PhotoGalleryItem = ({ item, i, j, setOpen, setLightboxIndex }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="sm:h-auto xs:h-auto xxs:h-auto sm:w-full xs:w-full xxs:w-full 3xl:h-64 2xl:h-56 lg:h-56 md:h-64 3xl:w-64 2xl:w-56 lg:w-56 md:w-64 overflow-hidden bg-cover bg-center p-1 border-2 border-black bg-white"
      onClick={() => {
        setLightboxIndex(i + j);
        setOpen(true);
      }}
    >
      <Image
        src={item.customerThumbnail}
        data-te-img={item.customerThumbnail}
        alt="Customer Review"
        className="w-full 3xl:h-auto lg:h-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL={listingLoaderImage}
      />
    </motion.div>
  );
};

export default PhotoGalleryItem;
