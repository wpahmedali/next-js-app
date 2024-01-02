import React from 'react';
import { motion } from 'framer-motion';
import { ISeeMoreButton } from 'components/grid-view-listings/interfaces/see-more-button.interface';
import { useLoadingState } from 'src/providers/LoadingContext';
import Loading from 'components/loading';

const SeeMoreButton = ({ isLoading, seeMore }: ISeeMoreButton) => {
  const loadingState = useLoadingState();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="flex flex-col items-center justify-center mb-2 "
    >
      <button
        onClick={seeMore}
        className="bg-primary text-sm text-black hover:bg-blue-400 font-bold py-2 px-32 xxs:px-10 mt-3 flex items-center hover:shadow-lg hover:shadow-blue-500/50 hover:text-white "
      >
        <span className="pr-2">
          {isLoading && loadingState === 'seeMoreLoader' && (
            <Loading height="h-4" width="w-4" />
          )}
        </span>
        <span>See More!</span>
      </button>
    </motion.div>
  );
};

export default SeeMoreButton;
