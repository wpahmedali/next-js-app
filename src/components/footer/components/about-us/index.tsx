import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { OrderListIcon } from 'icons';

const AboutUs = () => {
  return (
    <Fragment>
      <h2 className="mb-4 text-sm font-semibold uppercase text-primary">
        ABOUT US
      </h2>
      <ul className="text-xs list-inside list-disc-black">
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-1 flex items-center"
        >
          <Link href="/company-overview-of-jans-group#overview" className="hover:underline flex items-center ">
            <OrderListIcon />
            Over View
          </Link>
        </motion.li>
      
       
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-1"
        >
          <Link href="/awards-and-achievements-by-jan-japan#awards" className="hover:underline flex items-center">
            <OrderListIcon />
            Awards
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-4"
        >
          <Link href="/business-partners-of-jans-group#partners" className="hover:underline flex items-center">
            <OrderListIcon />
            Partners
          </Link>
        </motion.li>
      </ul>
    </Fragment>
  );
};

export default AboutUs;
