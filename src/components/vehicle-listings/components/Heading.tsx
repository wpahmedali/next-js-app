import { GridCarIcon } from 'icons/react-icons/GridCar';
import { ListViewIcon } from 'icons/react-icons/ListView';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { useSelectedCountryIcon } from 'src/hooks/selected-country-icon';
import { useDispatchLoadingState } from 'src/providers/LoadingContext';
import {
  useDispatchListView,
  useVehicleListView,
} from 'src/providers/VehicleListView';
import { getNameFromParam } from 'utils/get-name-from-param';
import FilterToggleMenu from 'components/right-menu/components/FilterToggleMenu';
import { useRouterParams } from 'src/hooks/router-params';
import { reactQuery } from 'src/common/constants';
import { listingViews } from 'src/common/listing-views';
import { useVehicleList } from 'react-query/hooks/api/vehicle/vehicle-list';
import { useSetContext } from 'src/providers/ModelContext';

const Heading = () => {
  const router: NextRouter = useRouter();
  const { maker, model, bodyType, yard } = router.query;
  const makerName =
    maker && !Array.isArray(maker) ? getNameFromParam(maker) : '';
  const modelName =
    model && !Array.isArray(model) ? getNameFromParam(model) : '';
  const bodyTypeName =
    bodyType && !Array.isArray(bodyType) ? getNameFromParam(bodyType) : '';
  const yardName = yard && !Array.isArray(yard) ? getNameFromParam(yard) : '';

  const setContext = useSetContext();
  const countryIcon = useSelectedCountryIcon();
  const selectedCountry = useCurrentCountryName();

  const dispatch = useDispatchListView();
  const setLoadingState = useDispatchLoadingState();

  const tabularView = () => {
    setContext('');
    dispatch({ type: 'TABULAR' });
    setLoadingState({ type: 'tabularLoader' });
  };
  const gridView = () => {
    setContext('');
    dispatch({ type: 'GRID' });
    setLoadingState({ type: 'gridLoader' });
  };

  const params = useRouterParams(router.query);
  const view = useVehicleListView();

  let viewParam = reactQuery.vehicleList.tabular;
  if (view === listingViews.grid) {
    params.perPage = params.page * params.perPage;
    params.page = 1;
    viewParam = reactQuery.vehicleList.grid;
  }

  const { data } = useVehicleList(viewParam, params);

  return (
    <div className="3xl:flex 2xl:flex lg:flex md:flex-row sm:flex-row xs:flex-row xxs:flex-row justify-between items-center">
      <div>
        <h1 className="text-xl color-black font-semibold border-zinc-300 pb-2 mt-2 flex">
          <span className="flex items-center mr-2">{countryIcon}</span>
          <span className="flex items-center">
            {maker && model
              ? `${makerName.toUpperCase()} > ${
                  model === 'all-models'
                    ? 'All Models'
                    : modelName.toUpperCase()
                }`
              : bodyType
              ? bodyTypeName.toUpperCase()
              : yard
              ? yardName.toUpperCase()
              : selectedCountry}{' '}
            {data?.data?.pagination?.count &&
              `(${data?.data?.pagination?.total})`}
          </span>
        </h1>
      </div>
      <div className="flex justify-between gap-3">
        <div className="flex gap-2 my-1 items-center">
          <FilterToggleMenu />
        </div>
        <div className="flex gap-3 my-2 sm:justify-end">
          <button
            onClick={gridView}
            className="grid-btn bg-primary p-2 gap-1 cursor-pointer hover:bg-slate-900 hover:fill-white rounded-md GridIcon active:bg-black-600 focus:outline-2 focus:ring focus:ring-gray-600 ring-primary ring-offset-2 ring-1"
          >
            <div className="flex gap-1">
              <ListViewIcon />
            </div>
          </button>

          <button
            onClick={tabularView}
            className="grid-btn bg-primary p-2 d-none-additional gap-1 cursor-pointer hover:bg-slate-900 hover:fill-white rounded-md GridIcon active:bg-black-600 focus:outline-2 focus:ring focus:ring-gray-600 ring-primary ring-offset-2 ring-1 lg:block sm:hidden xs:hidden xxs:hidden"
          >
            <div className="flex gap-1">
              <GridCarIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
