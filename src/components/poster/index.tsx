import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PrintVehicleDetail from './components/print-vehicle-detail';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import { usePosterList } from 'react-query/hooks/api/poster-list';
import PageLoader from 'components/page-loader';
import PrintButton from './components/PrintButton';

const PosterPrint = () => {
  const router: NextRouter = useRouter();

  const params = useRouterParams(router.query);

  const { data, isLoading, isPreviousData } = usePosterList(params);

  return (
    <Fragment>
      <PrintButton />
      {isLoading || isPreviousData ? (
        <PageLoader isLoading={true} />
      ) : (
        data?.data?.carList?.map((item) => (
          <Fragment key={item.carId}>
            <Header />
            <PrintVehicleDetail data={item} />
            <Footer />
            <p className="page-break-before: always"></p>
          </Fragment>
        ))
      )}
    </Fragment>
  );
};

export default PosterPrint;
