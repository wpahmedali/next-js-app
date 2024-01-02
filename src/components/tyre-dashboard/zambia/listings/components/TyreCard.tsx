import React, { Fragment } from 'react';
import { ITyreListingCard } from '../interfaces/tyre-listing-card.interface';
import { WhatsappIcon } from 'icons';
import Image from 'next/image';

const TyreCard = ({ isEven, data }: ITyreListingCard) => {
  return (
    <Fragment>
      <div className="shadow-md transition-all grid w-full gray-blue-500 shadow-gray-500/10 border rounded-xl my-3 divide-x overflow-hidden  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 grid-rows-1 grid-flow-dense">
        <div className={` ${isEven ? '' : ''} `}>
          <section className="px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-1">
                <Image
                  className="object-cover h-7 w-7 rounded-full"
                  src="https://janjapan.com/resources/images/tyre/tyre-mobile.png"
                  alt="Avatar"
                  width={30}
                  height={30}
                  priority={true}
                />
                <div className="flex flex-col mx-2">
                  <div className="font-semibold text-gray-700 text-lg">
                    {data.parentCategoryName}
                  </div>
                  <span className="mx-1 text-xs text-gray-600">
                    {data.sizeName}
                  </span>
                </div>
              </div>
            </div>
          </section>
          <hr className="border-gray-300" />
          <div className="flex items-center justify-between px-4 py-2 bg-[#e3e2df82] ">
            <span className="text-base font-medium text-current uppercase">
              ASK FOR STOCK & PRICE
            </span>
            <div className="flex flex-row items-center">
              <div className="text-xs font-medium text-gray-500 flex flex-row items-center mr-3">
                <WhatsappIcon />
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${
            isEven ? '' : ''
          } flex flex-col items-stretch min-h-full transition-all sm:w-full`}
        >
          <section className="">
            <div className="flex items-center justify-between bg-[#e3e2df82] py-2">
              <div className="flex flex-col px-3">
                <h1 className="">QUANTITY</h1>
                <span className="mx-1 text-xs text-gray-600">
                  {data.tyreQuantity}
                </span>
              </div>
            </div>
            <hr className="border-gray-300" />
            <h1 className="py-1 bg-black text-white px-3">{data.city}</h1>
            <p className="bg-black text-white px-3 pb-2">{data.address}</p>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default TyreCard;
