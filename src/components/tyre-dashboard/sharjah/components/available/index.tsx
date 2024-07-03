import Error from 'components/error';
import PageLoader from 'components/page-loader';
import { zambiaCountry } from 'components/tyre-dashboard/common/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { NextRouter, useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { useAvailableTyreList } from 'react-query/hooks/api/tyres/sharjah/available-tyre-list';
import { useTyreSharjah } from 'react-query/hooks/api/tyres/sharjah/tyre';
import { useLoadingState } from 'src/providers/LoadingContext';

const AvailableAuctions = () => {
  const loadingState = useLoadingState();
  const router: NextRouter = useRouter();
  const {
    query: { auctionId },
  }: NextRouter = useRouter();

  const [auctiondata, setAuctionData] = useState({
    name: '',
    date: '',
  });

  const countryId = zambiaCountry.id;
  const tyreAuctionId =
    auctionId && !Array.isArray(auctionId) ? Number(auctionId) : null;

  const { data: tyredata, isSuccess: tyreIsSuccess } =
    useTyreSharjah(countryId);

  useEffect(() => {
    if (tyreIsSuccess) {
      const dateAndName = tyredata.data.incommingtAuctionDate.find(
        (x) => x.id === Number(tyreAuctionId)
      );
      setAuctionData({
        name: dateAndName.auctionName,
        date: dateAndName.date,
      });
    }
  }, [tyreIsSuccess, router]);

  const { data, isLoading, isError, isSuccess } = useAvailableTyreList(
    countryId,
    tyreAuctionId,
    auctiondata.date
  );

  return (
    <Fragment>
      <div className="flex bg-primaryDark text-white justify-start items-center p-3 mt-2 px-7 font-bold uppercase text-lg w-full">
        {auctiondata.name} {auctiondata.date}
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.3 }}
        >
          <main className="bg-light w-full min-h-screen">
            {isLoading && loadingState === 'availableLoader' && (
              <PageLoader
                isLoading={isLoading && loadingState === 'availableLoader'}
              />
            )}
            {(!data || isError) && !isLoading && <Error />}
            {isSuccess &&
              data.data.every((item) => item.AuctionDetail.length === 0) && (
                <div className="py-5 text-red-500 text-center">
                  No Data Found
                </div>
              )}
            <div className="bg-gray-100 text-xs font-bold text-black p-7 sm:p-0 w-full">
              <table className="table-auto border-collapse border border-slate-400 w-full">
                <thead className="bg-primary border-none">
                  <tr>
                    {data &&
                      data.data.map((item) => (
                        <th
                          key={item.tyreTypeId}
                          className="border border-white p-2 text-xs"
                        >
                          {item.tyreTypeName}
                        </th>
                      ))}
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    {data &&
                      data.data.map((item, index) => (
                        <React.Fragment key={index}>
                          <td
                            key={index}
                            className="border border-white p-2 text-center"
                          >
                            {item.AuctionDetail &&
                              item.AuctionDetail.map(
                                (itemDetail, detailIndex) => (
                                  <div
                                    key={detailIndex}
                                    style={{
                                      borderBottom: '0.7px solid black',
                                    }}
                                    className="cursor-pointer p-2 d-flex flex-col"
                                  >
                                    {itemDetail.tyreSize} {itemDetail.tyreQty}
                                  </div>
                                )
                              )}
                          </td>
                        </React.Fragment>
                      ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
};

export default AvailableAuctions;
