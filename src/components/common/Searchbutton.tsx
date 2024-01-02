import Loading from 'components/loading';
import { motion } from 'framer-motion';
import { NextRouter, useRouter } from 'next/router';
import { useVehicleListGrid } from 'react-query/hooks/api/vehicle-list-grid';
import { useVehicleListTabular } from 'react-query/hooks/api/vehicle-list-tabular';
import { listingViews } from 'src/common/listing-views';
import { ROUTES } from 'src/common/routes';
import { GetBacklistingUrl } from 'src/hooks/get-back-listing-url';
import { useRouterParams } from 'src/hooks/router-params';
import { useSelectedCountry } from 'src/hooks/selected-country';
import {
  useDispatchLoadingState,
  useLoadingState,
} from 'src/providers/LoadingContext';
import { useSetContext } from 'src/providers/ModelContext';
import { useVehicleListView } from 'src/providers/VehicleListView';
import { createFilterQuery } from 'utils/create-queries';

const SearchButton = ({ filters, resetButtonClick }) => {
  const setLoadingState = useDispatchLoadingState();
  const selectedCountry = useSelectedCountry();
  const router: NextRouter = useRouter();
  const view = useVehicleListView();
  const loadingState = useLoadingState();
  const setContext = useSetContext();
  const params = useRouterParams(router.query);
  const backBaseUrl = GetBacklistingUrl(router);

  const { isPreviousData: gridPrevious, isSuccess: gridSuccess } =
    useVehicleListGrid(params);
  const { isPreviousData: tabularPrevious, isSuccess: tabularSuccess } =
    useVehicleListTabular(params);

  const isPreviousData =
    view === listingViews.tabular ? tabularPrevious : gridPrevious;
  const isSuccess =
    view === listingViews.tabular ? tabularSuccess : gridSuccess;

  const handleButtonClick = () => {
    const query = createFilterQuery(filters);
    if (query && isSuccess) {
      setLoadingState({ type: 'searchLoader' });
      let pathname = router.pathname;
      const queryParams = router.query;
      queryParams.page = '1';

      Object.keys(queryParams).forEach((key: string) => {
        pathname = pathname.replace(`[${key}]`, String(queryParams[key]));
      });

      if (router.query.carId || router.query.contact) {
        pathname = backBaseUrl;
      }

      router.push(
        pathname.length > 1
          ? pathname + query
          : `${
              params.countryId
                ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
                : ROUTES.ALL_STOCK
            }/1` + query
      );
      setContext('');
    }
  };

  const btnClass =
    'box p-2 focus:outline-none text-xs focus:shadow-outline flex w-full justify-center bg-gradient-to-r from-amber-300 to-yellow-500 rounded-sm';

  const isLoadingSearch = isPreviousData && loadingState === 'searchLoader';

  return (
    <div className="2xl:w-1/5 lg:w-1/5 md:w-1/2 sm:w-full xs:w-full xxs:w-full px-2 lg:mb-0 md:mb-5 place-items-center flex">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="mx-auto w-1/2 mr-1"
      >
        <button
          onClick={handleButtonClick}
          className={`${btnClass} ${
            isLoadingSearch &&
            'hover:from-sky-500 hover:to-sky-700 ring-1 hover:ring-gray-400 hover:text-white cursor-progress'
          }`}
          disabled={isLoadingSearch}
        >
          {isLoadingSearch && <Loading height="h-4" width="w-4" />}
          Search
        </button>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="mx-auto w-1/2 ml-1"
      >
        <button onClick={resetButtonClick} className={btnClass}>
          Reset
        </button>
      </motion.div>
    </div>
  );
};

export default SearchButton;
