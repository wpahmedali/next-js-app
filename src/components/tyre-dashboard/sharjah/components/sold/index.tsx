import React, { Fragment, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NextRouter, useRouter } from 'next/router';
import Error from 'components/error';
import { zambiaCountry } from 'components/tyre-dashboard/common/constants';
import { useSoldTyreList } from 'react-query/hooks/api/tyres/sharjah/sold-tyre-list';
import { useTyreSharjah } from 'react-query/hooks/api/tyres/sharjah/tyre';
import PageLoader from 'components/page-loader';
import { useLoadingState } from 'src/providers/LoadingContext';
import Pagination from 'components/pagination';

const SoldAuctionListing = () => {
  const loadingState = useLoadingState();
  const router: NextRouter = useRouter();
  const {
    query: { auctionId, page },
  }: NextRouter = useRouter();

  const [auctiondata, setAuctionData] = useState({
    name: '',
    date: '',
  });

  const countryId = zambiaCountry.id;
  const pageNo = page && !Array.isArray(page) ? Number(page) : 1;
  const tyreAuctionId =
    auctionId && !Array.isArray(auctionId) ? Number(auctionId) : null;

  const { data, isLoading, isError, isSuccess, isPreviousData } =
    useSoldTyreList(countryId, pageNo, tyreAuctionId);

  const { data: tyredata, isSuccess: tyreIsSuccess } =
    useTyreSharjah(countryId);

  useEffect(() => {
    if (tyreIsSuccess) {
      const dateAndName = tyredata.data.tyreLatestAuction.find(
        (x) => x.auctionId === Number(tyreAuctionId)
      );
      setAuctionData({
        name: dateAndName.auctionName,
        date: dateAndName.auctionDate,
      });
    }
  }, [tyreIsSuccess, router]);

  return (
    <Fragment>
      <div className="flex bg-primaryDark text-white justify-start items-center p-3 mt-2 px-7 font-bold uppercase text-lg w-full">
        {auctiondata.name} - {auctiondata.date}
      </div>
      {data?.data.pagination.total !== 0 && (
        <Pagination isLoading={isPreviousData} data={data?.data.pagination} />
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
            {isLoading && loadingState === 'soldLoader' && (
              <PageLoader
                isLoading={isLoading && loadingState === 'soldLoader'}
              />
            )}
            {isSuccess && data.data.tyreList.length === 0 && (
              <div className="py-5 text-red-500 text-center">No Data Found</div>
            )}

            <div className="bg-gray-100 text-xs font-bold text-black p-7 sm:p-0 w-full">
              <table className="table-auto border-collapse border border-slate-400 w-full">
                {!isError && (
                  <Fragment>
                    <thead className="bg-primary border-none">
                      <tr>
                        <th className="border border-white p-2 text-xs">
                          Lot NOkh
                        </th>
                        <th className="border border-white p-2 text-xs">
                          Tyre Size
                        </th>
                        <th className="border border-white p-2 text-xs">QTY</th>
                        <th className="border border-white p-2 text-xs">
                          Price/Unit
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {data?.data.tyreList.map((item, index) => (
                        <tr className="cursor-pointer" key={index}>
                          <td className={`p-2 text-center`}>
                            <h2 className="font-bold">{item.lotNo}</h2>
                          </td>
                          <td className={`p-2 text-xs text-center`}>
                            {item.tyreSize}
                          </td>
                          <td className={`p-2 text-xs font-bold text-center`}>
                            {item.qty}
                          </td>
                          <td
                            className={`p-2 text-xs font-extrabold text-center`}
                          >
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Fragment>
                )}
              </table>
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
};

export default SoldAuctionListing;
