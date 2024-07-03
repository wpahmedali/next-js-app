import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { listingLoaderImage } from 'src/common/listing-loader-image';
import { useSetContext } from 'src/providers/ModelContext';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const CardImage = ({ url, data }: { url: string; data: IVehicleDetail }) => {
  const setContext = useSetContext();
  return (
    <Link
      href={url}
      onClick={() => setContext('')}
      className="max-h-[135px] inline-block overflow-hidden"
    >
      <Image
        className="w-full"
        src={
          data.imageUrl.replace('/s_thumb', '/thumb') ||
          '/assets/car-no-image.jpg'
        }
        width={500}
        height={500}
        loading="lazy"
        alt=""
        placeholder="blur"
        blurDataURL={listingLoaderImage}
      />
    </Link>
  );
};

export default CardImage;
