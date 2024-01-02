import { motion, AnimatePresence } from 'framer-motion';
import TyreCard from './components/TyreCard';
import { NextRouter, useRouter } from 'next/router';
import { useTyreList } from 'react-query/hooks/api/tyres/zambia/tyre-list';
import Error from 'components/error';
import { zambiaCountry } from 'components/tyre-dashboard/common/constants';
import { useLoadingState } from 'src/providers/LoadingContext';
import PageLoader from 'components/page-loader';
import Pagination from 'components/pagination';
import { Fragment } from 'react';

const TyreListing = () => {
  const loadingState = useLoadingState();
  const {
    query: { page, tyreSize, category, keyword },
  }: NextRouter = useRouter();

  const countryId = zambiaCountry.id;

  const pageNo = page && !Array.isArray(page) ? Number(page) : 1;
  const tyreSizeId =
    tyreSize && !Array.isArray(tyreSize) ? Number(tyreSize) : null;
  const categoryId =
    category && !Array.isArray(category) ? Number(category) : null;
  const keyWord = keyword && !Array.isArray(keyword) ? keyword : '';

  const { data, isLoading, isError, isSuccess, isPreviousData } = useTyreList(
    countryId,
    pageNo,
    categoryId,
    tyreSizeId,
    keyWord
  );

  return (
    <Fragment>
      {isLoading && loadingState === 'tyreLoader' && (
        <PageLoader isLoading={isLoading && loadingState === 'tyreLoader'} />
      )}
      {data?.data.pagination?.total !== 0 && (
        <Pagination
          isLoading={isPreviousData && loadingState === 'tyreLoader'}
          data={data?.data.pagination}
        />
      )}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.3 }}
        >
          <main className="bg-light w-full min-h-screen">
            {(!data || isError) && !isLoading && <Error />}

            {isSuccess && data?.data?.tyreList.length === 0 && (
              <div className="py-5 text-red-500 text-center">No Data Found</div>
            )}

            {isSuccess && (
              <div className=" text-xs font-bold text-black p-7 sm:p-0">
                <div className="w-full justify-center">
                  {data.data.tyreList.map((item, i) => (
                    <TyreCard
                      key={item.tyreId}
                      isEven={i % 2 == 0 ? true : false}
                      data={item}
                    />
                  ))}
                </div>
              </div>
            )}
          </main>
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
};

export default TyreListing;
