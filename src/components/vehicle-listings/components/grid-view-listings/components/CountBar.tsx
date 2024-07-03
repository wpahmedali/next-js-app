import Loading from 'components/loading';
import React from 'react';

const CountBar = ({ isPreviousData, data }) => {
  return (
    <div className="flex items-center bg-black justify-between border-t border-gray-20  px-2 py-2 sm:px-2">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Showing{' '}
            <span className="font-medium">
              {data ? data?.currentPage * data?.perPage - data?.perPage + 1 : 0}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {data
                ? data?.currentPage * data?.perPage > data?.total
                  ? data?.total
                  : data?.currentPage * data?.perPage
                : 0}
            </span>{' '}
            of <span className="font-medium">{data ? data?.total : 0}</span>{' '}
            results
          </p>
        </div>
        {isPreviousData && <Loading />}
        <div></div>
      </div>
    </div>
  );
};

export default CountBar;
