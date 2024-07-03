import React from 'react';
import { ILocationCard } from '../../interfaces/location-card.interface';
import ContactItem from './ContactItem';
import Link from 'next/link';

const LocationCard = ({ isEven, data }: ILocationCard) => {
  return (
    <li className="transition-all w-full py-1">
      <Link
        href="#"
        className={`${
          isEven ? 'bg-[#CECECE]' : 'bg-[#e8e8e8]'
        } flex flex-col items-stretch min-h-full transition-all duration-150 shadow-lg hover:shadow-2xl`}
      >
        <section className="px-4 py-2">
          <h1 className="font-semibold text-lg">{data.city}</h1>
          <ContactItem title="Address" value={data.address} image="address" />
          <ContactItem
            title="Contact No"
            value={data.phone}
            image="phone-call"
          />
          <ContactItem title="E-mail" value={data.email} image="email" />
        </section>
      </Link>
    </li>
  );
};

export default LocationCard;
