import React from 'react';
import Link from 'next/link';
import {
  FacebookSocialIcon,
  GooglePlusSocialIcon,
  LinkedInSocialIcon,
  TwitterSocialIcon,
  YoutubeSocialIcon,
} from 'icons';
import { motion } from 'framer-motion';

const SocialIcons = () => {
  return (
    <div className="xl:basis-1/4 xxl:basis-1/4 lg:basis-1/4 md:basis-2/4 sm:basis-1/4 xs:basis-1/4 xxs:basis-1/4">
      <h2 className="mb-4 text-sm font-semibold uppercase text-primary">
        LET'S CONNECT WITH US
      </h2>
      <div className="flex items-center justify-between">
        <nav className="flex items-center justify-between gap-2 md:flex-wrap">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://www.linkedin.com/company/jan-japan/" target='blank'>
              <LinkedInSocialIcon />{' '}
            </Link>
          </motion.div>
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
            <Link href="https://www.youtube.com/channel/UCqetrY6YMjUrP-elm13thUg?sub_confirmation=1" target='blank'>
              <YoutubeSocialIcon />{' '}
            </Link>
          </motion.div>
        </nav>
      </div>
    </div>
  );
};

export default SocialIcons;
