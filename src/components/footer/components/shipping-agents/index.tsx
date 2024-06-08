import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { OrderListIcon } from 'icons';

const ShippingAgents = () => {
  return (
    <Fragment>
      <h2 className="mb-4 text-sm font-semibold uppercase text-primary">
        SHIPPING AGENTS
      </h2>
      <ul className="text-xs list-inside list-disc-black">
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-1"
        >
          <Link href="/associated-shipping-companies-of-jan-japan" className="hover:underline flex items-center">
            <OrderListIcon />
            Shipping Agents
          </Link>
        </motion.li>
      </ul>
    </Fragment>
  );
};

export default ShippingAgents;
