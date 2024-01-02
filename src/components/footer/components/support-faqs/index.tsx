import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { OrderListIcon } from 'icons';
import ShippingAgents from './../shipping-agents/index';


const SupportFaqs = () => {
  return (
    <Fragment>
      <div className="xl:basis-1/4 xxl:basis-1/4 lg:basis-1/4 md:basis-2/4 sm:basis-1/4 xs:basis-1/4 xxs:basis-1/4 border-e border-[#555555] lg:border-e md:border-e sm:border-e-0 xs:border-e-0 xxs:border-e-0">
        <h2 className="mb-4 text-sm font-semibold uppercase text-primary">
          SUPPORT & FAQ's
        </h2>
        <ul className="text-xs list-inside">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-1"
          >
            <Link href="/general-faqs-about-used-japanese-cars" className="hover:underline flex items-center">
              <OrderListIcon />
              General Questions{' '}
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-1"
          >
            <Link href="/faqs-about-cars-inventory" className="hover:underline flex items-center">
              <OrderListIcon />
              Inventory
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-1"
          >
            <Link href="/faqs-about-car-buying-and-payment-procedures" className="hover:underline flex items-center">
              <OrderListIcon />
              Buying & Paying
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-1"
          >
            <Link href="/faqs-about-car-booking-and-shipping" className="hover:underline flex items-center">
              <OrderListIcon />
              Booking & Shipping
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-1"
          >
            <Link href="/faqs-about-used-japanese-cars-documents" className="hover:underline flex items-center">
              <OrderListIcon />
              Documentation
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-1"
          >
            <Link href="/faqs-about-shipment-and-receipt-of-your-car" className="hover:underline flex items-center">
              <OrderListIcon />
              Shipment Receipt{' '}
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-1"
          >
            <Link href="/faqs-about-country-import-export-regulations" className="hover:underline flex items-center">
              <OrderListIcon />
              Country Regulations{' '}
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-1"
          >
            <Link href="/faqs-about-glossary-of-terms-when-buying-used-japenes-cars" className="hover:underline flex items-center">
              <OrderListIcon />
              Glossary Of Terms
            </Link>
          </motion.li>
        </ul>
      </div>
      <div className="xl:basis-1/4 xxl:basis-1/4 lg:basis-1/4 md:basis-2/4 sm:basis-1/4 xs:basis-1/4 xxs:basis-1/4 border-e border-[#555555] lg:border-e md:border-e sm:border-e-0 xs:border-e-0 xxs:border-e-0 h-full">
        <ShippingAgents />

      </div>
    </Fragment>
  );
};

export default SupportFaqs;
