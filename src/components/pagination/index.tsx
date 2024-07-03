import React from 'react';
import { IPagination } from 'src/interfaces/vehicle-list.interface';
import { NextRouter, useRouter } from 'next/router';
import PaginationButtons from './components/PaginationButtons';
import { gotoNewPage } from 'utils/goto-new-page';
import { GotoSecondPage } from 'utils/goto-second-page';
import { useDispatchLoadingState } from 'src/providers/LoadingContext';
import { ROUTES } from 'src/common/routes';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { useRouterParams } from 'src/hooks/router-params';
import { useSetContext } from 'src/providers/ModelContext';

const Pagination = ({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: IPagination;
}) => {
  const setContext = useSetContext();
  const setLoadingState = useDispatchLoadingState();
  const router: NextRouter = useRouter();
  const selectedCountry = useCurrentCountryName();
  const params = useRouterParams(router.query);
  const { page } = router.query;

  const handlePrevPage = () => {
    setContext('');
    const newPage = params.page - 1;
    newPage > 0 && gotoNewPage(router, newPage);
    setLoadingState({ type: 'tyreLoader' });
  };

  const handleNextPage = () => {
    setContext('');
    const newPage = params.page + 1;

    if (newPage <= data?.totalPages) {
      page
        ? gotoNewPage(router, newPage)
        : GotoSecondPage(router, selectedCountry, params);
    }
    setLoadingState({ type: 'tyreLoader' });
  };

  const handlePageChange = (currentPage: number) => {
    setContext('');
    setLoadingState({ type: 'tyreLoader' });
    if (page) {
      gotoNewPage(router, currentPage);
    } else {
      const path = router.asPath.split('?');
      const newPath = `${
        path[0].length > 1
          ? path[0] + '/'
          : params.countryId
          ? `/${ROUTES.COUNTRY_CAR_LIST}/${selectedCountry.toLowerCase()}-${
              params.countryId
            }/`
          : ROUTES.ALL_STOCK + path[0]
      }${currentPage ? currentPage : '/2'}${
        path.length > 1 ? '?' + path[1] : ''
      }`;
      router.push(newPath);
    }
  };

  return (
    <div className="flex items-center bg-black justify-between border-t border-gray-20  px-2 py-2 sm:px-2 sm:flex-initial">
      <div className="flex flex-1 justify-between sm:hidden xs:hidden xxs:hidden">
        <button
          onClick={handlePrevPage}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>

      <PaginationButtons
        isLoading={isLoading}
        data={data ? data : null}
        handlePageChange={handlePageChange}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
};

export default Pagination;
