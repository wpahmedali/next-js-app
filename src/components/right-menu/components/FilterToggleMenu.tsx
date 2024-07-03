import React from 'react';
import { motion } from 'framer-motion';
import { useSetContext } from 'src/providers/ModelContext';
import { GlobalbtnIcon, SearchIcon } from 'icons';
import ReportToggleMenu from 'components/report-toggle';

const FilterToggleMenu = (): JSX.Element => {
  const setContext = useSetContext();

  return (
    <ul className="flex gap-3">
      <ReportToggleMenu />
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          onClick={() => setContext('filterState')}
          className="w-fill cursor-pointer flex p-2 bg-[#fccf3a] hover:bg-[#000] hover:text-white rounded-md focus:outline-2 focus:ring focus:ring-gray-600 ring-black ring-offset-2 ring-2 text-center"
        >
          <span className="text-xs font-normal flex gap-2 text-center">
            <span className="flex items-center">
              <SearchIcon />
            </span>
            <span className="flex items-center">Filter Vehicles</span>
          </span>
        </a>
      </motion.li>
    </ul>
  );
};

export default FilterToggleMenu;
