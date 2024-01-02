import React, { Fragment } from 'react';
import WebMakers from './components/web-view';
import MobileMakers from './components/mobile-view';
import { useLoadingState } from 'src/providers/LoadingContext';
import { NextRouter, useRouter } from 'next/router';
import { useVehicleListView } from 'src/providers/VehicleListView';
import { useVehicleListGrid } from 'react-query/hooks/api/vehicle-list-grid';
import { useVehicleListTabular } from 'react-query/hooks/api/vehicle-list-tabular';
import { listingViews } from 'src/common/listing-views';
import { useRouterParams } from 'src/hooks/router-params';

const Makers = (): JSX.Element => {
  const { query }: NextRouter = useRouter();
  const view = useVehicleListView();
  const loadingState = useLoadingState();

  const params = useRouterParams(query);

  const { isPreviousData: gridPrevious } = useVehicleListGrid(params);
  const { isPreviousData: tabularPrevious } = useVehicleListTabular(params);

  const isPreviousData =
    view === listingViews.tabular ? tabularPrevious : gridPrevious;

  return (
    <WebMakers
      isLoading={isPreviousData && loadingState === 'makerLoader'}
      makerId={Number(params.makerId)}
    />
  );
};

export default Makers;
