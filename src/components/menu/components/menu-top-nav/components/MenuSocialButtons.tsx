import React from 'react';
import Link from 'next/link';

import {
  FacebookSocialIcon,
  LinkedInSocialIcon,
  TwitterSocialIcon,
  YoutubeSocialIcon,
} from 'icons';
import { motion } from 'framer-motion';
const MenuSocialButtons = () => {
  return (
    <div className="flex items-center justify-between lg:mt-0 md:mt-0 sm:mt-3 sm:hidden xs:hidden xxs:hidden 2xl:block lg:block md:block">
      <nav className="flex items-center justify-between gap-2">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Link href="https://wwww.facebook.com/janjapanglobal/" target='blank'>
            <FacebookSocialIcon />{' '}
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Link href="https://www.twitter.com/janjapanglobal/" target='blank'>
            <TwitterSocialIcon />{' '}
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Link href="https://www.linkedin.com/company/jan-japan/" target='blank'>
            <LinkedInSocialIcon />{' '}
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Link href="https://www.youtube.com/channel/UCqetrY6YMjUrP-elm13thUg?sub_confirmation=1" target='blank'>
            <YoutubeSocialIcon />{' '}
          </Link>
        </motion.div>
      </nav>
    </div>
  );
};

export default MenuSocialButtons;
