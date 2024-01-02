import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { GridCarIcon } from 'icons/react-icons/GridCar';
import { ListViewIcon } from 'icons/react-icons/ListView';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import { useSelectedCountry } from 'src/hooks/selected-country';
import { useSelectedCountryIcon } from 'src/hooks/selected-country-icon';
import { useDispatchLoadingState } from 'src/providers/LoadingContext';
import { useDispatchListView } from 'src/providers/VehicleListView';
import { getNameFromParam } from 'utils/get-name-from-param';

const Heading = () => {
  const router: NextRouter = useRouter();
  const { maker, model, bodyType } = router.query;
  const makerName =
    maker && !Array.isArray(maker) ? getNameFromParam(maker) : '';
  const modelName =
    model && !Array.isArray(model) ? getNameFromParam(model) : '';
  const bodyTypeName =
    bodyType && !Array.isArray(bodyType) ? getNameFromParam(bodyType) : '';

  const countryIcon = useSelectedCountryIcon();
  const selectedCountry = useSelectedCountry();

  const dispatch = useDispatchListView();
  const setLoadingState = useDispatchLoadingState();

  const tabularView = () => {
    dispatch({ type: 'TABULAR' });
    setLoadingState({ type: 'tabularLoader' });
  };
  const gridView = () => {
    dispatch({ type: 'GRID' });
    setLoadingState({ type: 'gridLoader' });
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl color-black font-semibold border-zinc-300 pb-2 mt-2 flex">
        <span className="flex items-center mr-2">
          {countryIcon || <GlobeAltIcon className="w-6 h-6" />}
        </span>
        <span className="flex items-center">
          {maker && model
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
