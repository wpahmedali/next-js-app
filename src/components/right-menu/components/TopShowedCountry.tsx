import React from 'react';
import { motion } from 'framer-motion';
import { useCountry } from 'react-query/hooks/api/country';
import Loading from 'components/loading';
import { useCurrentCountry } from 'src/hooks/current-country';

const TopShowedCountry = (): JSX.Element => {
  const { isLoading } = useCountry();
  const currentCountry = useCurrentCountry();

  if (isLoading) {
    return <Loading height="h-7" width="w-7" />;
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <li className="w-fill flex p-3 pl-3 bg-primaryDark  hover:bg-[#fccf3a]">
        <span
          className={`flex items-center ${
            currentCountry.countryName === 'Global' ? 'text-white' : ''
          }`}
        >
          {currentCountry.flagIcon}
        </span>
        <span className="ml-2 flex text-xs font-normal text-white items-center">
          {currentCountry.countryName}
        </span>
      </li>
    </motion.div>
  );
};

export default TopShowedCountry;
