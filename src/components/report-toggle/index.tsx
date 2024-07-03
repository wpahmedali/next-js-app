import React from 'react';
import { motion } from 'framer-motion';
import { useSetContext } from 'src/providers/ModelContext';
import { Report } from 'icons/react-icons/Report';

const ReportToggleMenu = (): JSX.Element => {
  const setContext = useSetContext();

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <li>
        <a
          onClick={() => setContext('reports')}
          className="w-fill cursor-pointer flex p-2 bg-[#fccf3a] hover:bg-[#000] hover:text-white rounded-md focus:outline-2 focus:ring focus:ring-gray-600 ring-black ring-offset-2 ring-2 text-center"
        >
          <span className="text-xs font-normal flex gap-2 text-center">
            <span className="text-xs font-normal flex gap-2">
              <Report />
            </span>
            <span className="flex items-center">Reports</span>
          </span>
        </a>
      </li>
    </motion.div>
  );
};

export default ReportToggleMenu;
