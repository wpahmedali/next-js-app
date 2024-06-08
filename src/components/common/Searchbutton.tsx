import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { NextRouter, useRouter } from 'next/router';
import { useVehicleList } from 'react-query/hooks/api/vehicle-list';
import { reactQuery } from 'src/common/constants';
import { listingViews } from 'src/common/listing-views';
import { useRouterParams } from 'src/hooks/router-params';
import {
  useDispatchLoadingState,
  useLoadingState,
} from 'src/providers/LoadingContext';
import { useVehicleListView } from 'src/providers/VehicleListView';
import Loading from 'components/loading';
import { useCurrentCountryName } from 'src/hooks/current-country-name';

const SearchButton = ({
  handleOnKeyDown,
  resetButtonClick,
  dropdownState,
  setDropdownState,
}) => {
  const setLoadingState = useDispatchLoadingState();
  const router: NextRouter = useRouter();
  const view = useVehicleListView();
  const loadingState = useLoadingState();
  const params = useRouterParams(router.query);

  let viewParam = reactQuery.vehicleList.tabular;

  if (view === listingViews.grid) {
    params.perPage = params.page * params.perPage;
    params.page = 1;
    viewParam = reactQuery.vehicleList.grid;
  }

  const { isPreviousData } = useVehicleList(viewParam, params);

  const handleReset = () => {
    if (dropdownState) {
      setDropdownState('');
    }
    setLoadingState({ type: 'resetLoader' });
  };

  const btnClass =
    'box p-2 focus:outline-none text-xs focus:shadow-outline flex w-full justify-center bg-gradient-to-r from-amber-300 to-yellow-500 rounded-sm';

  const isLoadingSearch = isPreviousData && loadingState === 'searchLoader';
  const isLoadingReset = isPreviousData && loadingState === 'resetLoader';

  const renderButton = (label, onClickHandler, isLoading) => (
    <div className="2xl:w-1/6 lg:w-1/6 md:w-1/2 sm:w-full xs:w-full xxs:w-full px-2 2xl:mb-2 lg:mb-2 md:mb-2 sm:mb-2 xs:mb-2 xxs:mb-2">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="mx-auto w-full"
      >
        <button
          onClick={onClickHandler}
          className={`${btnClass} ${
            isLoading &&
            'hover:from-sky-500 hover:to-sky-700 ring-1 hover:ring-gray-400 hover:text-white cursor-progress'
          }`}
          disabled={isLoading}
        >
          {isLoading && <Loading height="h-5" width="w-5" />}
          {label}
        </button>
      </motion.div>
    </div>
  );

  return (
    <Fragment>
      {renderButton('Search', handleOnKeyDown, isLoadingSearch)}
      {renderButton(
        'Reset',
        () => {
          resetButtonClick();
          handleReset();
        },
        isLoadingReset
      )}
    </Fragment>
  );
};

export default SearchButton;
