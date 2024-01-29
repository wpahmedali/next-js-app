import React from 'react';
import { motion } from 'framer-motion';
import { NextRouter, useRouter } from 'next/router';
import { useCountry } from 'react-query/hooks/api/country';
import { getCountryIcon } from 'utils/get-country-icon';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Loading from 'components/loading';
import { useRouterParams } from 'src/hooks/router-params';

const TopShowedCountry = (): JSX.Element => {
  const { query }: NextRouter = useRouter();
  const { data, isLoading, isError } = useCountry();

  const countryData: { name: string; icon: JSX.Element } = {
    name: 'Global',
    icon: <GlobeAltIcon className="h-6 w-6 text-white" />,
  };

  const params = useRouterParams(query);

  if (params.countryId && !isLoading && !isError && data) {
    const selectedCountry = data.data.find(
      (x) => x.id === Number(params.countryId)
    );

    if (selectedCountry) {
      countryData.name = selectedCountry.countryName;
      countryData.icon = getCountryIcon(selectedCountry.cssClass);
    }
  }

  if (isLoading) {
    return <Loading height="h-7" width="w-7" />;
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <li className="w-fill flex p-3 pl-3 bg-primaryDark  hover:bg-[#fccf3a]">
        <span className="flex items-center">{countryData.icon}</span>
        <span className="ml-2 flex text-xs font-normal text-white items-center">
          {countryData.name}
        </span>
      </li>
    </motion.div>
  );
};

export default TopShowedCountry;
