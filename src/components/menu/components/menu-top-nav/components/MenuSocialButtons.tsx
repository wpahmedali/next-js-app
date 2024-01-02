import React, { Fragment } from 'react';
import Link from 'next/link';

import {
  FacebookSocialIcon,
  GooglePlusSocialIcon,
  LinkedInSocialIcon,
  TwitterSocialIcon,
  YoutubeSocialIcon,
} from 'icons';
import { motion } from 'framer-motion';
const MenuSocialButtons = () => {
  return (
    <Fragment>

      <div className="flex items-center justify-between lg:mt-0 md:mt-0 sm:mt-3 sm:hidden xs:hidden xxs:hidden 2xl:block lg:block md:block">
        <nav className="flex items-center justify-between gap-2">

          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://wwww.facebook.com/janjapanglobal/">
              <FacebookSocialIcon />{' '}
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://www.twitter.com/janjapanglobal/">
              <TwitterSocialIcon />{' '}
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://www.linkedin.com/company/jan-japan/">
              <LinkedInSocialIcon />{' '}
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://www.youtube.com/channel/UCqetrY6YMjUrP-elm13thUg?sub_confirmation=1">
              <YoutubeSocialIcon />{' '}
            </Link>
          </motion.div>
        </nav>
      </div>
    </Fragment>
  );
};

export default MenuSocialButtons;
