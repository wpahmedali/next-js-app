import { DownArrow } from 'icons/react-icons/DownArrow';
import React from 'react';

const LoadMore = ({ loadMore }) => {
  return (
    <div className="flex justify-center">
      <button
        className="bg-black text-center text-white p-3 2xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center items-center hover:bg-primary hover:text-black mt-2 sm:w-full xs:w-full xxs:w-full"
        onClick={loadMore}
      >
        Load More <DownArrow />
      </button>
    </div>
  );
};

export default LoadMore;
