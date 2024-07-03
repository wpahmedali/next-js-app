import Image from 'next/image';
import React, { Fragment } from 'react';
import { IContactItem } from '../../interfaces/contact-item.interface';

const ContactItem = ({ title, value, image }: IContactItem): JSX.Element => {
  return (
    <Fragment>
      {title !== 'Address' && <hr className="border-gray-300" />}
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          <Image
            className="object-cover"
            width={20}
            height={20}
            src={`/assets/${image}.png`}
            alt={image}
          />
          <div className="flex flex-col m-2">
            <div className="font-semibold text-gray-700 text-sm">{title}:</div>
            <p className="mx-1 text-sm text-gray-600">{value}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactItem;
