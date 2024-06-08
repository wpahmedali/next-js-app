import { motion } from 'framer-motion';
import { NextRouter, useRouter } from 'next/router';
import { ITyreFilters } from '../interfaces/filters.interface';
import { zambiaCountry } from 'components/tyre-dashboard/common/constants';
import { useTyreList } from 'react-query/hooks/api/tyres/zambia/tyre-list';
import {
  useDispatchLoadingState,
  useLoadingState,
} from 'src/providers/LoadingContext';
import Loading from 'components/loading';

const TyreSearchButton = ({
  filters,
  resetButtonClick,
}: {
  filters: ITyreFilters;
  resetButtonClick: () => void;
}) => {
  const setLoadingState = useDispatchLoadingState();
  const loadingState = useLoadingState();
  const router: NextRouter = useRouter();

  const { category, page, tyreSize, keyword } = router.query;
  const countryId = zambiaCountry.id;

  const pageNo = page && !Array.isArray(page) ? Number(page) : 1;
  const tyreSizeId =
    tyreSize && !Array.isArray(tyreSize) ? Number(tyreSize) : null;
  const categoryId =
    category && !Array.isArray(category) ? Number(category) : null;
  const keyWord = keyword && !Array.isArray(keyword) ? keyword : '';

  const { isPreviousData } = useTyreList(
    countryId,
    pageNo,
    categoryId,
    tyreSizeId,
    keyWord
  );

  const handleButtonClick = () => {
    if (!filters.keyWord && !filters.tyreSizeId) {
      return;
    }

    let pathname = router.pathname;

    pathname = pathname.replace('[country]', String(countryId));
    if (page && !Array.isArray(page)) {
      pathname = pathname.replace('[page]', '1');
    }
    let query = filters.tyreSizeId || filters.keyWord || category ? '?' : '';

    if (category) {
      query += `category=${category}&`;
    }
    if (filters.tyreSizeId) {
      query += `tyreSize=${filters.tyreSizeId}&`;
    }
    if (filters.keyWord) {
      query += `keyword=${filters.keyWord}&`;
    }
    query = query.slice(0, -1);

    router.push(pathname + query);
    setLoadingState({ type: 'tyreSearchLoader' });
  };

  const btnClass =
    'box p-2 focus:outline-none text-xs focus:shadow-outline flex w-full justify-center bg-gradient-to-r from-amber-300 to-yellow-500 rounded-sm';

  return (
    <div className="2xl:w-1/3 lg:w-1/3 sm:w-full xs:w-full xxs:w-full px-2 lg:mb-0 md:mb-5 place-items-center flex">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="mx-auto w-1/2 mr-1"
      >
        <button
          onClick={handleButtonClick}
          className={`${btnClass} ${
            loadingState === 'tyreSearchLoader' &&
            isPreviousData &&
            'hover:from-sky-500 hover:to-sky-700 ring-1 hover:ring-gray-400 hover:text-white cursor-progress'
          }`}
        >
          {loadingState === 'tyreSearchLoader' && isPreviousData && (
            <Loading height="h-5" width="w-5" />
          )}
          Search
        </button>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="mx-auto w-1/2 ml-1"
      >
        <button
          onClick={resetButtonClick}
          className="box p-2 focus:outline-none text-xs focus:shadow-outline flex w-full justify-center bg-gradient-to-r from-amber-300 to-yellow-500 rounded-sm"
        >
          Reset
        </button>
      </motion.div>
    </div>
  );
};

export default TyreSearchButton;
