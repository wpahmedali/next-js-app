import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { listingLoaderImage } from 'src/common/listing-loader-image';

const PhotoGalleryItem = ({ item, i, j, setOpen, setLightboxIndex }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="h-full p-1 border-2 border-black bg-white"
      onClick={() => {
        setLightboxIndex(i + j);
        setOpen(true);
      }}
    >
      <Image
        src={item.customerThumbnail}
        data-te-img={item.customerThumbnail}
        alt="Customer Review"
        className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL={listingLoaderImage}
      />
    </motion.div>
  );
};

export default PhotoGalleryItem;
