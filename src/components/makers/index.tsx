import React from 'react';
import WebMakers from './components/web-view';
import { useLoadingState } from 'src/providers/LoadingContext';
import { NextRouter, useRouter } from 'next/router';
import { useVehicleListView } from 'src/providers/VehicleListView';
import { useVehicleList } from 'react-query/hooks/api/vehicle-list';
import { reactQuery } from 'src/common/constants';
import { listingViews } from 'src/common/listing-views';
import { useRouterParams } from 'src/hooks/router-params';

const Makers = (): JSX.Element => {
  const { query }: NextRouter = useRouter();
  const params = useRouterParams(query);
  const view = useVehicleListView();
  const loadingState = useLoadingState();

  let viewParam = reactQuery.vehicleList.tabular;
  if (view === listingViews.grid) {
    params.perPage = params.page * params.perPage;
    params.page = 1;
    viewParam = reactQuery.vehicleList.grid;
  }
  const { isPreviousData } = useVehicleList(viewParam, params);

  return (
    <WebMakers
      isLoading={isPreviousData && loadingState === 'makerLoader'}
      makerId={Number(params.makerId)}
    />
  );
};

export default Makers;
