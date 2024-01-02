import React from 'react';
import Image from 'next/image';
import { CaretRightIcon, StarRateIcon } from 'icons';
import { getCountryIcon } from 'utils/get-country-icon';
import { listingLoaderImage } from 'src/common/listing-loader-image';
import Link from 'next/link';

const ListingItem = ({ i, person, setLightBox, setLightboxIndex }) => {
  return (
    <li
      onClick={() => {
        setLightboxIndex(i);
        setLightBox(true);
      }}
      className=" cursor-pointer flex justify-between gap-x-6 py-5 2xl:flex lg:flex md:flex sm:flex-col xs:flex-col xxs:flex-col"
    >
      <div className="flex 2xl:min-w-0 lg:min-w-0 md:min-w-0 gap-x-4 sm:w-full xs:w-full xxs:w-full">
        <Image
          className="h-24 w-24 flex-none rounded-full bg-gray-50"
          src={person.customerThumbnail}
          width={500}
          height={500}
          alt=""
          loading="lazy"
          placeholder="blur"
          blurDataURL={listingLoaderImage}
        />
        <div className="break-keep overflow-auto">
          <div className="flex gap-2">
            <span className="flex items-center text-xl font-semibold leading-6 text-gray-900">
              {person.customerName}
            </span>
            <span className="flex items-center ">
              {getCountryIcon(person.cssClass)}
            </span>
          </div>
          <p className="mt-1 truncate text-lg leading-5 text-gray-500">
            {person.title}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {person.reviews}
          </p>
          <div className="text-blue-600 flex text-lg font-bold">
            {person.title} <CaretRightIcon />
          </div>
        </div>
      </div>
      <div className="shrink-0 flex lg:flex md:flex sm:flex-col xs:flex-col xxs:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900 flex items-center space-x-1">
          {Array.from({ length: 5 }, (v, i) => (
            <StarRateIcon
              key={i}
              color={i < person.reviewRating ? 'gold' : 'gray'}
            />
          ))}
        </p>
        {person.createdAt ? (
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Last seen <time dateTime={person.reviews}>{person.createdAt}</time>
          </p>
        ) : (
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="text-xs leading-5 text-gray-500">Online</p>
          </div>
        )}
      </div>
    </li>
  );
};

export default ListingItem;
