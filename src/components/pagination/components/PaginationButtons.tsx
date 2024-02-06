import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Loading from 'components/loading';
import PaginationButton from './PaginationButton';
import { IPaginationButtons } from '../interfaces/pagination-buttons.interface';
import { useCurrentCountry } from 'src/hooks/current-country';

const PaginationButtons = ({
  isLoading,
  data,
  handlePageChange,
  handleNextPage,
  handlePrevPage,
}: IPaginationButtons) => {
  const currentCountry = useCurrentCountry();
  const buttonsToShow = 7;

  const halfButtonsToShow = Math.floor(buttonsToShow / 2);
  let startPage = Math.max(data?.currentPage - halfButtonsToShow, 1);
  let endPage = Math.min(
    data?.currentPage + halfButtonsToShow,
    data?.totalPages
  );

  if (endPage - startPage < buttonsToShow - 1) {
    if (startPage === 1) {
      endPage = buttonsToShow;
    } else {
      startPage = endPage - buttonsToShow + 1;
      if (startPage < 1) {
        startPage = 1;
      }
    }
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    if (data?.totalPages >= i) {
      pageNumbers.push(i);
    }
  }

  const lastTwoButtons = [];
  for (let i = Math.max(data?.totalPages - 1, 1); i <= data?.totalPages; i++) {
    if (!pageNumbers.includes(i)) {
      lastTwoButtons.push(i);
    }
  }

  return (
    <div className="2xl:flex lg:flex md:flex sm:flex-initial xs:flex-initial xxs:flex-initial items-center justify-between w-full">
      <div>
        {currentCountry?.isCount && (
          <p className="text-sm text-white sm:mb-2 2xl:mb-0 lg:mb-0">
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
        )}
      </div>

      {isLoading && <Loading />}
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            onClick={handlePrevPage}
            className="relative inline-flex items-center rounded-l-md px-1 py-1 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-primary hover:text-black focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          {pageNumbers.map((page) => (
            <PaginationButton
              key={page}
              handleButtonClick={() => handlePageChange(page)}
              page={page}
              isActive={!!(data?.currentPage === page)}
            />
          ))}
          {pageNumbers.length < data?.totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] < data?.totalPages - 2 && (
                <span className="relative inline-flex items-center px-2 py-1 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0">
                  . . .
                </span>
              )}
              {lastTwoButtons.map((page) => (
                <PaginationButton
                  key={page}
                  handleButtonClick={() => handlePageChange(page)}
                  page={page}
                  isActive={!!(data?.currentPage === page)}
                />
              ))}
            </>
          )}

          <button
            onClick={handleNextPage}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-primary hover:text-black focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default PaginationButtons;
