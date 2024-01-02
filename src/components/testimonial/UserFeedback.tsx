import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarRateIcon } from 'icons';
import { ICustomerReview } from 'src/interfaces/customer-review.interface';
import { listingLoaderImage } from 'src/common/listing-loader-image';

const UserFeedback = ({
  data,
  url,
}: {
  data: ICustomerReview;
  url: string;
}) => {
  return (
    <Fragment>
      <div className="py-8 md:py-2">
        <div
          role="status"
          className=" md:space-y-0 md:space-x-8  md:flex md:items-center sm:border-r-none border-e lg:border-e sm:border-e-0 border-white"
        >
          <Link href={url}>
            <span className="flex items-start justify-end sm:w-full overflow-hidden h-40 bg-contain bg-center rounded-lg">
              <Image
                alt=""
                className="rounded-lg"
                src={data.customerImage}
                width={274}
                height={138}
                loading="lazy"
                placeholder="blur"
                blurDataURL={listingLoaderImage}
              />
            </span>
          </Link>
          <div className="w-full ml-auto items-start justify-start">
            <div className="w-48 mb-4 font-bold text-sm">
              {data.customerName}
            </div>
            <div className="max-w-[480px] text-xs mb-4">
              {data.reviews}
            </div>
            <div className="my-1 xxs:py-2">
              <nav className="flex gap-2">
                {Array.from({ length: data.reviewRating }, (v, i) => (
                  <StarRateIcon color="#fff" key={i} />
                ))}
              </nav>
            </div>
            <div className="max-w-[440px] mb-2.5 text-xs">
              Review on {data.title}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserFeedback;
