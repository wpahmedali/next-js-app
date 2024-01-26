import React from 'react';
import { motion } from 'framer-motion';
import CountryDialog from 'components/right-menu/components/country-dialog';
import { useModelState, useSetContext } from 'src/providers/ModelContext';

const CountryToggleMenu = (): JSX.Element => {
  const setContext = useSetContext();
  const modelState = useModelState();

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <li>
        <a
          onClick={() => setContext('country')}
          className="w-fill cursor-pointer flex p-3 pl-3 bg-[#E8E8E8] hover:bg-[#fccf3a]"
        >
          <span className="ml-3 text-xs font-normal text-black flex gap-2">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
            </span>
            <span className="flex items-center">Switch Country</span>
          </span>
          <CountryDialog isShowDialog={modelState} hideDialog={setContext} />
        </a>
      </li>
    </motion.div>
  );
};

export default CountryToggleMenu;
