import { GridCarIcon } from 'icons/react-icons/GridCar';
import { ListViewIcon } from 'icons/react-icons/ListView';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useVehicleList } from 'react-query/hooks/api/vehicle-list';
import {
  reactQuery,
  vehicleListViews,
  vehiclePerPageList,
} from 'src/common/constants';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { useRouterParams } from 'src/hooks/router-params';
import { useSelectedCountryIcon } from 'src/hooks/selected-country-icon';
import { useDispatchLoadingState } from 'src/providers/LoadingContext';
import { useTitleContext } from 'src/providers/TitleContext';
import {
  useDispatchListView,
  useVehicleListView,
} from 'src/providers/VehicleListView';
import { getNameFromParam } from 'utils/get-name-from-param';

const Heading = () => {
  const router: NextRouter = useRouter();
  const [isClient, setClient] = useState(false);
  const { maker, model, bodyType, page } = router.query;
  const makerName =
    maker && !Array.isArray(maker) ? getNameFromParam(maker) : '';
  const modelName =
    model && !Array.isArray(model) ? getNameFromParam(model) : '';
  const bodyTypeName =
    bodyType && !Array.isArray(bodyType) ? getNameFromParam(bodyType) : '';

  const countryIcon = useSelectedCountryIcon();
  const selectedCountry = useCurrentCountryName();
  const view = useVehicleListView();

  const dispatch = useDispatchListView();
  const setLoadingState = useDispatchLoadingState();
  const { title, updateTitle } = useTitleContext();

  useEffect(() => {
    setClient(true);
  }, []);

  let pageNo: number;
  let perPage: number;

  const tabularView = () => {
    dispatch({ type: 'TABULAR' });
    setLoadingState({ type: 'tabularLoader' });
  };

  const params = useRouterParams(router.query);
  if (
    view === vehicleListViews.s_grid &&
    isClient &&
    localStorage.getItem('pageNo') !== 'undefined'
  ) {
    const pageDif =
      params.page - JSON.parse(localStorage.getItem('pageNo')) + 1;

    perPage = pageDif > 0 ? pageDif * vehiclePerPageList : vehiclePerPageList;
    pageNo = params.page;
  } else {
    perPage = params.page * vehiclePerPageList;
    pageNo = 1;
  }

  const gridView = () => {
    if (view === vehicleListViews.tabular) {
      dispatch({ type: 'S_GRID' });
    }
    setLoadingState({ type: 'gridLoader' });
    localStorage.setItem('pageNo', `${page}`);
  };

  const { isFetching, isFetched } = useVehicleList(
    reactQuery.vehicleList.grid,
    params
  );

  if (isFetched) {
    updateTitle(
      maker && model && !isFetching
        ? `${makerName.toUpperCase()} > ${
            model === 'all-models' ? 'All Models' : modelName.toUpperCase()
          }`
        : bodyType && !isFetching
        ? bodyTypeName.toUpperCase()
        : !isFetching && selectedCountry
    );
  }

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl color-black font-semibold border-zinc-300 pb-2 mt-2 flex">
        <span className="flex items-center mr-2">{countryIcon}</span>
        <span className="flex items-center">
          {isFetching
            ? title
            : maker && model
            ? `${makerName.toUpperCase()} > ${
                model === 'all-models' ? 'All Models' : modelName.toUpperCase()
              }`
            : bodyType
            ? bodyTypeName.toUpperCase()
            : selectedCountry}
        </span>
      </h1>
      <div className="flex justify-end gap-3 my-2">
        <button
          onClick={gridView}
          className="grid-btn bg-primary p-2 gap-1 cursor-pointer hover:bg-slate-900 hover:fill-white rounded-md GridIcon active:bg-black-600 focus:outline-2 focus:ring focus:ring-gray-600 ring-primary ring-offset-2 ring-2"
        >
          <div className="flex gap-1">
            <ListViewIcon />
          </div>
        </button>

        <button
          onClick={tabularView}
          className="grid-btn bg-primary p-2 gap-1 cursor-pointer hover:bg-slate-900 hover:fill-white rounded-md GridIcon active:bg-black-600 focus:outline-2 focus:ring focus:ring-gray-600 ring-primary ring-offset-2 ring-2"
        >
          <div className="flex gap-1">
            <GridCarIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Heading;
