import React, { Fragment } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import Loading from 'components/loading';
import Yard from './components/Yard';
import { useYardList } from 'react-query/hooks/api/yard/yard-list';

const Yards = (): JSX.Element => {
  const { query }: NextRouter = useRouter();
  const params = useRouterParams(query);

  const { data, isLoading, isPreviousData } = useYardList(params.countryId);

  return (
    <div className="car-found">
      {isLoading || isPreviousData ? (
        <Loading />
      ) : (
        <Fragment>
          <Yard
            data={data?.data?.yardList}
            totaldCars={data?.data?.totaldCars}
            reserved={false}
          />
          <Yard
            data={data?.data?.reservedYard}
            totaldCars={data?.data?.totalReservedCars}
            reserved={true}
          />
        </Fragment>
      )}
    </div>
  );
};

export default Yards;
